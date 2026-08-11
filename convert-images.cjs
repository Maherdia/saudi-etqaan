const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ASSETS_ROOT = path.join(
    __dirname,
    'src',
    'assets',
);

const SUPPORTED_EXTENSIONS = new Set([
    '.webp',
    '.webp',
    '.jpeg',
]);

const SKIP_FOLDERS = new Set([
    'node_modules',
    '.git',
    'dist',
]);

async function getImageFiles(folder) {
    const imageFiles = [];

    if (!fs.existsSync(folder)) {
        return imageFiles;
    }

    const entries = fs.readdirSync(
        folder,
        {
            withFileTypes: true,
        },
    );

    for (const entry of entries) {
        const fullPath = path.join(
            folder,
            entry.name,
        );

        if (entry.isDirectory()) {
            if (
                SKIP_FOLDERS.has(
                    entry.name,
                )
            ) {
                continue;
            }

            const nestedImages =
                await getImageFiles(
                    fullPath,
                );

            imageFiles.push(
                ...nestedImages,
            );

            continue;
        }

        if (!entry.isFile()) {
            continue;
        }

        const extension =
            path
                .extname(entry.name)
                .toLowerCase();

        if (
            SUPPORTED_EXTENSIONS.has(
                extension,
            )
        ) {
            imageFiles.push(fullPath);
        }
    }

    return imageFiles;
}

async function convertImage(inputPath) {
    const extension =
        path
            .extname(inputPath)
            .toLowerCase();

    const parsed =
        path.parse(inputPath);

    const outputPath =
        path.join(
            parsed.dir,
            `${parsed.name}.webp`,
        );

    if (
        extension === '.webp'
    ) {
        return null;
    }

    const relativeInput =
        path.relative(
            __dirname,
            inputPath,
        );

    const relativeOutput =
        path.relative(
            __dirname,
            outputPath,
        );

    console.log(
        `\nConverting:\n  ${relativeInput}`,
    );

    await sharp(inputPath)
        .rotate()
        .webp({
            quality: 82,
            effort: 6,
        })
        .toFile(outputPath);

    const oldSize =
        fs.statSync(
            inputPath,
        ).size;

    const newSize =
        fs.statSync(
            outputPath,
        ).size;

    const savedBytes =
        oldSize - newSize;

    const savedPercent =
        oldSize > 0
            ? (
                (
                    savedBytes /
                    oldSize
                ) * 100
            ).toFixed(1)
            : '0.0';

    console.log(
        `  ${(
            oldSize /
            1024 /
            1024
        ).toFixed(2)} MB`,
    );

    console.log(
        `  -> ${(
            newSize /
            1024 /
            1024
        ).toFixed(2)} MB`,
    );

    console.log(
        `  Saved: ${savedPercent}%`,
    );

    console.log(
        `  Output: ${relativeOutput}`,
    );

    return {
        inputPath,
        outputPath,
        oldSize,
        newSize,
    };
}

async function run() {
    if (
        !fs.existsSync(
            ASSETS_ROOT,
        )
    ) {
        console.error(
            'src/assets folder was not found.',
        );

        process.exit(1);
    }

    console.log(
        'Scanning all images inside src/assets...',
    );

    const imageFiles =
        await getImageFiles(
            ASSETS_ROOT,
        );

    if (
        imageFiles.length === 0
    ) {
        console.log(
            'No.webp.webp/JPEG images found.',
        );

        return;
    }

    console.log(
        `Found ${imageFiles.length} images.`,
    );

    let convertedCount = 0;
    let failedCount = 0;

    let totalOriginalSize = 0;
    let totalWebpSize = 0;

    for (
        const imagePath
        of imageFiles
    ) {
        try {
            const result =
                await convertImage(
                    imagePath,
                );

            if (!result) {
                continue;
            }

            convertedCount += 1;

            totalOriginalSize +=
                result.oldSize;

            totalWebpSize +=
                result.newSize;
        } catch (error) {
            failedCount += 1;

            console.error(
                `\nFailed: ${path.relative(
                    __dirname,
                    imagePath,
                )}`,
            );

            console.error(
                error.message,
            );
        }
    }

    const totalSaved =
        totalOriginalSize -
        totalWebpSize;

    const totalSavedPercent =
        totalOriginalSize > 0
            ? (
                (
                    totalSaved /
                    totalOriginalSize
                ) * 100
            ).toFixed(1)
            : '0.0';

    console.log(
        '\n========================================',
    );

    console.log(
        'CONVERSION COMPLETE',
    );

    console.log(
        '========================================',
    );

    console.log(
        `Converted: ${convertedCount}`,
    );

    console.log(
        `Failed: ${failedCount}`,
    );

    console.log(
        `Original total: ${(
            totalOriginalSize /
            1024 /
            1024
        ).toFixed(2)} MB`,
    );

    console.log(
        `WebP total: ${(
            totalWebpSize /
            1024 /
            1024
        ).toFixed(2)} MB`,
    );

    console.log(
        `Saved: ${(
            totalSaved /
            1024 /
            1024
        ).toFixed(2)} MB (${totalSavedPercent}%)`,
    );

    console.log(
        '========================================',
    );

    console.log(
        '\nImportant:',
    );

    console.log(
        'The original.webp.webp/JPEG files were NOT deleted.',
    );

    console.log(
        'Update your React imports to use the new .webp files before deleting originals.',
    );
}

run().catch(error => {
    console.error(
        '\nFatal error:',
        error,
    );

    process.exit(1);
});