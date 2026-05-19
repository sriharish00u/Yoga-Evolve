
# FILE: ./code.py

import os

OUTPUT_FILE = "code.md"

INCLUDE_EXTENSIONS = {
    ".ts", ".tsx",
    ".js", ".jsx",
    ".css",
    ".html",
    ".json",
    ".md",
    ".py"
}

EXCLUDE_DIRS = {
    "node_modules",
    "dist",
    ".git",
    "build",
    ".next",
    "coverage",
    "__pycache__"
}

file_count = 0

with open(OUTPUT_FILE, "w", encoding="utf-8") as outfile:

    for root, dirs, files in os.walk("."):

        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]

        for file in files:

            if not any(file.endswith(ext) for ext in INCLUDE_EXTENSIONS):
                continue

            filepath = os.path.join(root, file)

            outfile.write(f"\n# FILE: {filepath}\n\n")

            try:
                with open(filepath, "r", encoding="utf-8") as infile:
                    outfile.write(infile.read())

                outfile.write("\n\n")
                file_count += 1

            except Exception as e:
                outfile.write(f"\nERROR: {e}\n\n")

size_kb = os.path.getsize(OUTPUT_FILE) / 1024

print("\n✅ code.md generated successfully!")
print(f"📄 Files included : {file_count}")
print(f"💾 Output size    : {size_kb:.2f} KB\n")



# FILE: ./code.md




# FILE: ./tsconfig.json

{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}



# FILE: ./index.html

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="logo3.jpg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Project Evolving Yoga - Adaptive Yoga Trainer</title>
    <meta name="description" content="Offline, privacy-first yoga trainer with adaptive routines, pose library, and comprehensive yoga knowledge. Improve flexibility, strength, and mental well-being." />
    <meta name="keywords" content="yoga, trainer, adaptive, offline, poses, meditation, wellness, fitness" />
    <meta name="author" content="Project Evolving Yoga" />
    <meta property="og:title" content="Project Evolving Yoga - Adaptive Yoga Trainer" />
    <meta property="og:description" content="Offline, privacy-first yoga trainer with adaptive routines and comprehensive pose library." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/pose@0.5.1675469404/pose.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils@0.3.1675466862/camera_utils.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils@0.3.1675466124/drawing_utils.js" crossorigin="anonymous"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>



# FILE: ./tsconfig.node.json

{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2023",
    "lib": ["ES2023"],
    "module": "ESNext",
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}



# FILE: ./package-lock.json

{
  "name": "yoga",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "yoga",
      "version": "0.0.0",
      "dependencies": {
        "react": "^19.1.1",
        "react-dom": "^19.1.1",
        "react-router-dom": "^7.15.1",
        "sharp": "^0.34.4"
      },
      "devDependencies": {
        "@eslint/js": "^9.36.0",
        "@types/node": "^24.6.0",
        "@types/react": "^19.1.16",
        "@types/react-dom": "^19.1.9",
        "@vitejs/plugin-react": "^5.0.4",
        "babel-plugin-react-compiler": "^19.1.0-rc.3",
        "eslint": "^9.36.0",
        "eslint-plugin-react-hooks": "^5.2.0",
        "eslint-plugin-react-refresh": "^0.4.22",
        "globals": "^16.4.0",
        "typescript": "~5.9.3",
        "typescript-eslint": "^8.45.0",
        "vite": "^7.1.7"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.27.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.27.1",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.28.4",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.28.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.3",
        "@babel/helper-compilation-targets": "^7.27.2",
        "@babel/helper-module-transforms": "^7.28.3",
        "@babel/helpers": "^7.28.4",
        "@babel/parser": "^7.28.4",
        "@babel/template": "^7.27.2",
        "@babel/traverse": "^7.28.4",
        "@babel/types": "^7.28.4",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.28.3",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.28.3",
        "@babel/types": "^7.28.2",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.27.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.27.2",
        "@babel/helper-validator-option": "^7.27.1",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.28.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.27.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.27.1",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.28.3",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.27.1",
        "@babel/traverse": "^7.28.3"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.27.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.27.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.27.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.27.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.28.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.28.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.4"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-self": {
      "version": "7.27.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-source": {
      "version": "7.27.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.27.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/parser": "^7.27.2",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.28.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.3",
        "@babel/helper-globals": "^7.28.0",
        "@babel/parser": "^7.28.4",
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.4",
        "debug": "^4.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.28.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.5.0.tgz",
      "integrity": "sha512-97/BJ3iXHww3djw6hYIfErCZFee7qCtrneuLa20UXFCOTCfBM2cvQHjWJ2EG0s0MtdNwInarqCTz35i4wWXHsQ==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.9.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/config-array": {
      "version": "0.21.0",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/object-schema": "^2.1.6",
        "debug": "^4.3.1",
        "minimatch": "^3.1.2"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/config-helpers": {
      "version": "0.4.0",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^0.16.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/core": {
      "version": "0.16.0",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@types/json-schema": "^7.0.15"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "3.3.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^6.12.4",
        "debug": "^4.3.2",
        "espree": "^10.0.1",
        "globals": "^14.0.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.1.0",
        "minimatch": "^3.1.2",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint/eslintrc/node_modules/globals": {
      "version": "14.0.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@eslint/js": {
      "version": "9.37.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      }
    },
    "node_modules/@eslint/object-schema": {
      "version": "2.1.6",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/plugin-kit": {
      "version": "0.4.0",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^0.16.0",
        "levn": "^0.4.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@humanfs/core": {
      "version": "0.19.1",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/node": {
      "version": "0.16.7",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanfs/core": "^0.19.1",
        "@humanwhocodes/retry": "^0.4.0"
      },
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/retry": {
      "version": "0.4.3",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@img/colour": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/@img/colour/-/colour-1.0.0.tgz",
      "integrity": "sha512-A5P/LfWGFSl6nsckYtjw9da+19jB8hkJ6ACTGcDfEJ0aE+l2n2El7dsVM7UVHZQ9s2lmYMWlrS21YLy2IR1LUw==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@img/sharp-darwin-arm64": {
      "version": "0.34.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-arm64/-/sharp-darwin-arm64-0.34.4.tgz",
      "integrity": "sha512-sitdlPzDVyvmINUdJle3TNHl+AG9QcwiAMsXmccqsCOMZNIdW2/7S26w0LyU8euiLVzFBL3dXPwVCq/ODnf2vA==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-arm64": "1.2.3"
      }
    },
    "node_modules/@img/sharp-darwin-x64": {
      "version": "0.34.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-x64/-/sharp-darwin-x64-0.34.4.tgz",
      "integrity": "sha512-rZheupWIoa3+SOdF/IcUe1ah4ZDpKBGWcsPX6MT0lYniH9micvIU7HQkYTfrx5Xi8u+YqwLtxC/3vl8TQN6rMg==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-x64": "1.2.3"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-arm64": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-arm64/-/sharp-libvips-darwin-arm64-1.2.3.tgz",
      "integrity": "sha512-QzWAKo7kpHxbuHqUC28DZ9pIKpSi2ts2OJnoIGI26+HMgq92ZZ4vk8iJd4XsxN+tYfNJxzH6W62X5eTcsBymHw==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-x64": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-x64/-/sharp-libvips-darwin-x64-1.2.3.tgz",
      "integrity": "sha512-Ju+g2xn1E2AKO6YBhxjj+ACcsPQRHT0bhpglxcEf+3uyPY+/gL8veniKoo96335ZaPo03bdDXMv0t+BBFAbmRA==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm/-/sharp-libvips-linux-arm-1.2.3.tgz",
      "integrity": "sha512-x1uE93lyP6wEwGvgAIV0gP6zmaL/a0tGzJs/BIDDG0zeBhMnuUPm7ptxGhUbcGs4okDJrk4nxgrmxpib9g6HpA==",
      "cpu": [
        "arm"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm64": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm64/-/sharp-libvips-linux-arm64-1.2.3.tgz",
      "integrity": "sha512-I4RxkXU90cpufazhGPyVujYwfIm9Nk1QDEmiIsaPwdnm013F7RIceaCc87kAH+oUB1ezqEvC6ga4m7MSlqsJvQ==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-ppc64": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-ppc64/-/sharp-libvips-linux-ppc64-1.2.3.tgz",
      "integrity": "sha512-Y2T7IsQvJLMCBM+pmPbM3bKT/yYJvVtLJGfCs4Sp95SjvnFIjynbjzsa7dY1fRJX45FTSfDksbTp6AGWudiyCg==",
      "cpu": [
        "ppc64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-s390x": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-s390x/-/sharp-libvips-linux-s390x-1.2.3.tgz",
      "integrity": "sha512-RgWrs/gVU7f+K7P+KeHFaBAJlNkD1nIZuVXdQv6S+fNA6syCcoboNjsV2Pou7zNlVdNQoQUpQTk8SWDHUA3y/w==",
      "cpu": [
        "s390x"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-x64": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-x64/-/sharp-libvips-linux-x64-1.2.3.tgz",
      "integrity": "sha512-3JU7LmR85K6bBiRzSUc/Ff9JBVIFVvq6bomKE0e63UXGeRw2HPVEjoJke1Yx+iU4rL7/7kUjES4dZ/81Qjhyxg==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-arm64": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-arm64/-/sharp-libvips-linuxmusl-arm64-1.2.3.tgz",
      "integrity": "sha512-F9q83RZ8yaCwENw1GieztSfj5msz7GGykG/BA+MOUefvER69K/ubgFHNeSyUu64amHIYKGDs4sRCMzXVj8sEyw==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-x64": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-x64/-/sharp-libvips-linuxmusl-x64-1.2.3.tgz",
      "integrity": "sha512-U5PUY5jbc45ANM6tSJpsgqmBF/VsL6LnxJmIf11kB7J5DctHgqm0SkuXzVWtIY90GnJxKnC/JT251TDnk1fu/g==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-linux-arm": {
      "version": "0.34.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm/-/sharp-linux-arm-0.34.4.tgz",
      "integrity": "sha512-Xyam4mlqM0KkTHYVSuc6wXRmM7LGN0P12li03jAnZ3EJWZqj83+hi8Y9UxZUbxsgsK1qOEwg7O0Bc0LjqQVtxA==",
      "cpu": [
        "arm"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm": "1.2.3"
      }
    },
    "node_modules/@img/sharp-linux-arm64": {
      "version": "0.34.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm64/-/sharp-linux-arm64-0.34.4.tgz",
      "integrity": "sha512-YXU1F/mN/Wu786tl72CyJjP/Ngl8mGHN1hST4BGl+hiW5jhCnV2uRVTNOcaYPs73NeT/H8Upm3y9582JVuZHrQ==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm64": "1.2.3"
      }
    },
    "node_modules/@img/sharp-linux-ppc64": {
      "version": "0.34.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-ppc64/-/sharp-linux-ppc64-0.34.4.tgz",
      "integrity": "sha512-F4PDtF4Cy8L8hXA2p3TO6s4aDt93v+LKmpcYFLAVdkkD3hSxZzee0rh6/+94FpAynsuMpLX5h+LRsSG3rIciUQ==",
      "cpu": [
        "ppc64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-ppc64": "1.2.3"
      }
    },
    "node_modules/@img/sharp-linux-s390x": {
      "version": "0.34.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-s390x/-/sharp-linux-s390x-0.34.4.tgz",
      "integrity": "sha512-qVrZKE9Bsnzy+myf7lFKvng6bQzhNUAYcVORq2P7bDlvmF6u2sCmK2KyEQEBdYk+u3T01pVsPrkj943T1aJAsw==",
      "cpu": [
        "s390x"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-s390x": "1.2.3"
      }
    },
    "node_modules/@img/sharp-linux-x64": {
      "version": "0.34.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-x64/-/sharp-linux-x64-0.34.4.tgz",
      "integrity": "sha512-ZfGtcp2xS51iG79c6Vhw9CWqQC8l2Ot8dygxoDoIQPTat/Ov3qAa8qpxSrtAEAJW+UjTXc4yxCjNfxm4h6Xm2A==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-x64": "1.2.3"
      }
    },
    "node_modules/@img/sharp-linuxmusl-arm64": {
      "version": "0.34.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-arm64/-/sharp-linuxmusl-arm64-0.34.4.tgz",
      "integrity": "sha512-8hDVvW9eu4yHWnjaOOR8kHVrew1iIX+MUgwxSuH2XyYeNRtLUe4VNioSqbNkB7ZYQJj9rUTT4PyRscyk2PXFKA==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-arm64": "1.2.3"
      }
    },
    "node_modules/@img/sharp-linuxmusl-x64": {
      "version": "0.34.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-x64/-/sharp-linuxmusl-x64-0.34.4.tgz",
      "integrity": "sha512-lU0aA5L8QTlfKjpDCEFOZsTYGn3AEiO6db8W5aQDxj0nQkVrZWmN3ZP9sYKWJdtq3PWPhUNlqehWyXpYDcI9Sg==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-x64": "1.2.3"
      }
    },
    "node_modules/@img/sharp-wasm32": {
      "version": "0.34.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-wasm32/-/sharp-wasm32-0.34.4.tgz",
      "integrity": "sha512-33QL6ZO/qpRyG7woB/HUALz28WnTMI2W1jgX3Nu2bypqLIKx/QKMILLJzJjI+SIbvXdG9fUnmrxR7vbi1sTBeA==",
      "cpu": [
        "wasm32"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later AND MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/runtime": "^1.5.0"
      },
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-arm64": {
      "version": "0.34.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-arm64/-/sharp-win32-arm64-0.34.4.tgz",
      "integrity": "sha512-2Q250do/5WXTwxW3zjsEuMSv5sUU4Tq9VThWKlU2EYLm4MB7ZeMwF+SFJutldYODXF6jzc6YEOC+VfX0SZQPqA==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-ia32": {
      "version": "0.34.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-ia32/-/sharp-win32-ia32-0.34.4.tgz",
      "integrity": "sha512-3ZeLue5V82dT92CNL6rsal6I2weKw1cYu+rGKm8fOCCtJTR2gYeUfY3FqUnIJsMUPIH68oS5jmZ0NiJ508YpEw==",
      "cpu": [
        "ia32"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-x64": {
      "version": "0.34.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-x64/-/sharp-win32-x64-0.34.4.tgz",
      "integrity": "sha512-xIyj4wpYs8J18sVN3mSQjwrw7fKUqRw+Z5rnHNCy5fYTxigBz81u5mOMPmFumwjcn8+ld1ppptMBCLic1nz6ig==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.0-beta.38",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@rollup/rollup-win32-x64-gnu": {
      "version": "4.52.4",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-msvc": {
      "version": "4.52.4",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@types/babel__core": {
      "version": "7.20.5",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.20.7",
        "@babel/types": "^7.20.7",
        "@types/babel__generator": "*",
        "@types/babel__template": "*",
        "@types/babel__traverse": "*"
      }
    },
    "node_modules/@types/babel__generator": {
      "version": "7.27.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__template": {
      "version": "7.4.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.1.0",
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__traverse": {
      "version": "7.28.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.2"
      }
    },
    "node_modules/@types/estree": {
      "version": "1.0.8",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/json-schema": {
      "version": "7.0.15",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "24.6.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~7.13.0"
      }
    },
    "node_modules/@types/react": {
      "version": "19.2.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.0.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.2.0",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.2.0"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin": {
      "version": "8.45.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/regexpp": "^4.10.0",
        "@typescript-eslint/scope-manager": "8.45.0",
        "@typescript-eslint/type-utils": "8.45.0",
        "@typescript-eslint/utils": "8.45.0",
        "@typescript-eslint/visitor-keys": "8.45.0",
        "graphemer": "^1.4.0",
        "ignore": "^7.0.0",
        "natural-compare": "^1.4.0",
        "ts-api-utils": "^2.1.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "@typescript-eslint/parser": "^8.45.0",
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin/node_modules/ignore": {
      "version": "7.0.5",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/@typescript-eslint/parser": {
      "version": "8.45.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/scope-manager": "8.45.0",
        "@typescript-eslint/types": "8.45.0",
        "@typescript-eslint/typescript-estree": "8.45.0",
        "@typescript-eslint/visitor-keys": "8.45.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/project-service": {
      "version": "8.45.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/tsconfig-utils": "^8.45.0",
        "@typescript-eslint/types": "^8.45.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/scope-manager": {
      "version": "8.45.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.45.0",
        "@typescript-eslint/visitor-keys": "8.45.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/tsconfig-utils": {
      "version": "8.45.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/type-utils": {
      "version": "8.45.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.45.0",
        "@typescript-eslint/typescript-estree": "8.45.0",
        "@typescript-eslint/utils": "8.45.0",
        "debug": "^4.3.4",
        "ts-api-utils": "^2.1.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/types": {
      "version": "8.45.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree": {
      "version": "8.45.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/project-service": "8.45.0",
        "@typescript-eslint/tsconfig-utils": "8.45.0",
        "@typescript-eslint/types": "8.45.0",
        "@typescript-eslint/visitor-keys": "8.45.0",
        "debug": "^4.3.4",
        "fast-glob": "^3.3.2",
        "is-glob": "^4.0.3",
        "minimatch": "^9.0.4",
        "semver": "^7.6.0",
        "ts-api-utils": "^2.1.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/brace-expansion": {
      "version": "2.0.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/minimatch": {
      "version": "9.0.5",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/semver": {
      "version": "7.7.2",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@typescript-eslint/utils": {
      "version": "8.45.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.7.0",
        "@typescript-eslint/scope-manager": "8.45.0",
        "@typescript-eslint/types": "8.45.0",
        "@typescript-eslint/typescript-estree": "8.45.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys": {
      "version": "8.45.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.45.0",
        "eslint-visitor-keys": "^4.2.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@vitejs/plugin-react": {
      "version": "5.0.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.28.4",
        "@babel/plugin-transform-react-jsx-self": "^7.27.1",
        "@babel/plugin-transform-react-jsx-source": "^7.27.1",
        "@rolldown/pluginutils": "1.0.0-beta.38",
        "@types/babel__core": "^7.20.5",
        "react-refresh": "^0.17.0"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "peerDependencies": {
        "vite": "^4.2.0 || ^5.0.0 || ^6.0.0 || ^7.0.0"
      }
    },
    "node_modules/acorn": {
      "version": "8.15.0",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/ajv": {
      "version": "6.12.6",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "dev": true,
      "license": "Python-2.0"
    },
    "node_modules/babel-plugin-react-compiler": {
      "version": "19.1.0-rc.3",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.26.0"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.8.12",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.js"
      }
    },
    "node_modules/brace-expansion": {
      "version": "1.1.12",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/browserslist": {
      "version": "4.26.3",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "baseline-browser-mapping": "^2.8.9",
        "caniuse-lite": "^1.0.30001746",
        "electron-to-chromium": "^1.5.227",
        "node-releases": "^2.0.21",
        "update-browserslist-db": "^1.1.3"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001747",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/convert-source-map": {
      "version": "2.0.0",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cookie": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-1.1.1.tgz",
      "integrity": "sha512-ei8Aos7ja0weRpFzJnEA9UHJ/7XQmqglbRwnf2ATjcB9Wq874VKH9kfjjirM6UhU2/E5fFYadylyhFldcqSidQ==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/csstype": {
      "version": "3.1.3",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/detect-libc": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.1.tgz",
      "integrity": "sha512-ecqj/sy1jcK1uWrwpR67UhYrIFQ+5WlGxth34WquCbamhFA6hkkwiu37o6J5xCHdo1oixJRfVRw+ywV+Hq/0Aw==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.230",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/esbuild": {
      "version": "0.25.10",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.25.10",
        "@esbuild/android-arm": "0.25.10",
        "@esbuild/android-arm64": "0.25.10",
        "@esbuild/android-x64": "0.25.10",
        "@esbuild/darwin-arm64": "0.25.10",
        "@esbuild/darwin-x64": "0.25.10",
        "@esbuild/freebsd-arm64": "0.25.10",
        "@esbuild/freebsd-x64": "0.25.10",
        "@esbuild/linux-arm": "0.25.10",
        "@esbuild/linux-arm64": "0.25.10",
        "@esbuild/linux-ia32": "0.25.10",
        "@esbuild/linux-loong64": "0.25.10",
        "@esbuild/linux-mips64el": "0.25.10",
        "@esbuild/linux-ppc64": "0.25.10",
        "@esbuild/linux-riscv64": "0.25.10",
        "@esbuild/linux-s390x": "0.25.10",
        "@esbuild/linux-x64": "0.25.10",
        "@esbuild/netbsd-arm64": "0.25.10",
        "@esbuild/netbsd-x64": "0.25.10",
        "@esbuild/openbsd-arm64": "0.25.10",
        "@esbuild/openbsd-x64": "0.25.10",
        "@esbuild/openharmony-arm64": "0.25.10",
        "@esbuild/sunos-x64": "0.25.10",
        "@esbuild/win32-arm64": "0.25.10",
        "@esbuild/win32-ia32": "0.25.10",
        "@esbuild/win32-x64": "0.25.10"
      }
    },
    "node_modules/esbuild/node_modules/@esbuild/aix-ppc64": {
      "version": "0.25.10",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.25.10.tgz",
      "integrity": "sha512-0NFWnA+7l41irNuaSVlLfgNT12caWJVLzp5eAVhZ0z1qpxbockccEt3s+149rE64VUI3Ml2zt8Nv5JVc4QXTsw==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/esbuild/node_modules/@esbuild/android-arm": {
      "version": "0.25.10",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.25.10.tgz",
      "integrity": "sha512-dQAxF1dW1C3zpeCDc5KqIYuZ1tgAdRXNoZP7vkBIRtKZPYe2xVr/d3SkirklCHudW1B45tGiUlz2pUWDfbDD4w==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/esbuild/node_modules/@esbuild/android-arm64": {
      "version": "0.25.10",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.25.10.tgz",
      "integrity": "sha512-LSQa7eDahypv/VO6WKohZGPSJDq5OVOo3UoFR1E4t4Gj1W7zEQMUhI+lo81H+DtB+kP+tDgBp+M4oNCwp6kffg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/esbuild/node_modules/@esbuild/android-x64": {
      "version": "0.25.10",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.25.10.tgz",
      "integrity": "sha512-MiC9CWdPrfhibcXwr39p9ha1x0lZJ9KaVfvzA0Wxwz9ETX4v5CHfF09bx935nHlhi+MxhA63dKRRQLiVgSUtEg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/esbuild/node_modules/@esbuild/darwin-arm64": {
      "version": "0.25.10",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.25.10.tgz",
      "integrity": "sha512-JC74bdXcQEpW9KkV326WpZZjLguSZ3DfS8wrrvPMHgQOIEIG/sPXEN/V8IssoJhbefLRcRqw6RQH2NnpdprtMA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/esbuild/node_modules/@esbuild/darwin-x64": {
      "version": "0.25.10",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.25.10.tgz",
      "integrity": "sha512-tguWg1olF6DGqzws97pKZ8G2L7Ig1vjDmGTwcTuYHbuU6TTjJe5FXbgs5C1BBzHbJ2bo1m3WkQDbWO2PvamRcg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/esbuild/node_modules/@esbuild/freebsd-arm64": {
      "version": "0.25.10",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.25.10.tgz",
      "integrity": "sha512-3ZioSQSg1HT2N05YxeJWYR+Libe3bREVSdWhEEgExWaDtyFbbXWb49QgPvFH8u03vUPX10JhJPcz7s9t9+boWg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/esbuild/node_modules/@esbuild/freebsd-x64": {
      "version": "0.25.10",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.25.10.tgz",
      "integrity": "sha512-LLgJfHJk014Aa4anGDbh8bmI5Lk+QidDmGzuC2D+vP7mv/GeSN+H39zOf7pN5N8p059FcOfs2bVlrRr4SK9WxA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/esbuild/node_modules/@esbuild/linux-arm": {
      "version": "0.25.10",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.25.10.tgz",
      "integrity": "sha512-oR31GtBTFYCqEBALI9r6WxoU/ZofZl962pouZRTEYECvNF/dtXKku8YXcJkhgK/beU+zedXfIzHijSRapJY3vg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/esbuild/node_modules/@esbuild/linux-arm64": {
      "version": "0.25.10",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.25.10.tgz",
      "integrity": "sha512-5luJWN6YKBsawd5f9i4+c+geYiVEw20FVW5x0v1kEMWNq8UctFjDiMATBxLvmmHA4bf7F6hTRaJgtghFr9iziQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/esbuild/node_modules/@esbuild/linux-ia32": {
      "version": "0.25.10",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.25.10.tgz",
      "integrity": "sha512-NrSCx2Kim3EnnWgS4Txn0QGt0Xipoumb6z6sUtl5bOEZIVKhzfyp/Lyw4C1DIYvzeW/5mWYPBFJU3a/8Yr75DQ==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/esbuild/node_modules/@esbuild/linux-loong64": {
      "version": "0.25.10",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.25.10.tgz",
      "integrity": "sha512-xoSphrd4AZda8+rUDDfD9J6FUMjrkTz8itpTITM4/xgerAZZcFW7Dv+sun7333IfKxGG8gAq+3NbfEMJfiY+Eg==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/esbuild/node_modules/@esbuild/linux-mips64el": {
      "version": "0.25.10",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.25.10.tgz",
      "integrity": "sha512-ab6eiuCwoMmYDyTnyptoKkVS3k8fy/1Uvq7Dj5czXI6DF2GqD2ToInBI0SHOp5/X1BdZ26RKc5+qjQNGRBelRA==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/esbuild/node_modules/@esbuild/linux-ppc64": {
      "version": "0.25.10",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.25.10.tgz",
      "integrity": "sha512-NLinzzOgZQsGpsTkEbdJTCanwA5/wozN9dSgEl12haXJBzMTpssebuXR42bthOF3z7zXFWH1AmvWunUCkBE4EA==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/esbuild/node_modules/@esbuild/linux-riscv64": {
      "version": "0.25.10",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.25.10.tgz",
      "integrity": "sha512-FE557XdZDrtX8NMIeA8LBJX3dC2M8VGXwfrQWU7LB5SLOajfJIxmSdyL/gU1m64Zs9CBKvm4UAuBp5aJ8OgnrA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/esbuild/node_modules/@esbuild/linux-s390x": {
      "version": "0.25.10",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.25.10.tgz",
      "integrity": "sha512-3BBSbgzuB9ajLoVZk0mGu+EHlBwkusRmeNYdqmznmMc9zGASFjSsxgkNsqmXugpPk00gJ0JNKh/97nxmjctdew==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/esbuild/node_modules/@esbuild/linux-x64": {
      "version": "0.25.10",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.25.10.tgz",
      "integrity": "sha512-QSX81KhFoZGwenVyPoberggdW1nrQZSvfVDAIUXr3WqLRZGZqWk/P4T8p2SP+de2Sr5HPcvjhcJzEiulKgnxtA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/esbuild/node_modules/@esbuild/netbsd-arm64": {
      "version": "0.25.10",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.25.10.tgz",
      "integrity": "sha512-AKQM3gfYfSW8XRk8DdMCzaLUFB15dTrZfnX8WXQoOUpUBQ+NaAFCP1kPS/ykbbGYz7rxn0WS48/81l9hFl3u4A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/esbuild/node_modules/@esbuild/netbsd-x64": {
      "version": "0.25.10",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.25.10.tgz",
      "integrity": "sha512-7RTytDPGU6fek/hWuN9qQpeGPBZFfB4zZgcz2VK2Z5VpdUxEI8JKYsg3JfO0n/Z1E/6l05n0unDCNc4HnhQGig==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/esbuild/node_modules/@esbuild/openbsd-arm64": {
      "version": "0.25.10",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.25.10.tgz",
      "integrity": "sha512-5Se0VM9Wtq797YFn+dLimf2Zx6McttsH2olUBsDml+lm0GOCRVebRWUvDtkY4BWYv/3NgzS8b/UM3jQNh5hYyw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/esbuild/node_modules/@esbuild/openbsd-x64": {
      "version": "0.25.10",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.25.10.tgz",
      "integrity": "sha512-XkA4frq1TLj4bEMB+2HnI0+4RnjbuGZfet2gs/LNs5Hc7D89ZQBHQ0gL2ND6Lzu1+QVkjp3x1gIcPKzRNP8bXw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/esbuild/node_modules/@esbuild/openharmony-arm64": {
      "version": "0.25.10",
      "resolved": "https://registry.npmjs.org/@esbuild/openharmony-arm64/-/openharmony-arm64-0.25.10.tgz",
      "integrity": "sha512-AVTSBhTX8Y/Fz6OmIVBip9tJzZEUcY8WLh7I59+upa5/GPhh2/aM6bvOMQySspnCCHvFi79kMtdJS1w0DXAeag==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/esbuild/node_modules/@esbuild/sunos-x64": {
      "version": "0.25.10",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.25.10.tgz",
      "integrity": "sha512-fswk3XT0Uf2pGJmOpDB7yknqhVkJQkAQOcW/ccVOtfx05LkbWOaRAtn5SaqXypeKQra1QaEa841PgrSL9ubSPQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/esbuild/node_modules/@esbuild/win32-arm64": {
      "version": "0.25.10",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.25.10.tgz",
      "integrity": "sha512-ah+9b59KDTSfpaCg6VdJoOQvKjI33nTaQr4UluQwW7aEwZQsbMCfTmfEO4VyewOxx4RaDT/xCy9ra2GPWmO7Kw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/esbuild/node_modules/@esbuild/win32-ia32": {
      "version": "0.25.10",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.25.10.tgz",
      "integrity": "sha512-QHPDbKkrGO8/cz9LKVnJU22HOi4pxZnZhhA2HYHez5Pz4JeffhDjf85E57Oyco163GnzNCVkZK0b/n4Y0UHcSw==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/esbuild/node_modules/@esbuild/win32-x64": {
      "version": "0.25.10",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.25.10.tgz",
      "integrity": "sha512-9KpxSVFCu0iK1owoez6aC/s/EdUQLDN3adTxGCqxMVhrPDj6bt5dbrHDXUuq+Bs2vATFBBrQS5vdQ/Ed2P+nbw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "9.37.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.8.0",
        "@eslint-community/regexpp": "^4.12.1",
        "@eslint/config-array": "^0.21.0",
        "@eslint/config-helpers": "^0.4.0",
        "@eslint/core": "^0.16.0",
        "@eslint/eslintrc": "^3.3.1",
        "@eslint/js": "9.37.0",
        "@eslint/plugin-kit": "^0.4.0",
        "@humanfs/node": "^0.16.6",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@humanwhocodes/retry": "^0.4.2",
        "@types/estree": "^1.0.6",
        "@types/json-schema": "^7.0.15",
        "ajv": "^6.12.4",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.6",
        "debug": "^4.3.2",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^8.4.0",
        "eslint-visitor-keys": "^4.2.1",
        "espree": "^10.4.0",
        "esquery": "^1.5.0",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^8.0.0",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.1.2",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      },
      "peerDependencies": {
        "jiti": "*"
      },
      "peerDependenciesMeta": {
        "jiti": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-plugin-react-hooks": {
      "version": "5.2.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "eslint": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0"
      }
    },
    "node_modules/eslint-plugin-react-refresh": {
      "version": "0.4.23",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "eslint": ">=8.40"
      }
    },
    "node_modules/eslint-scope": {
      "version": "8.4.0",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "4.2.1",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/espree": {
      "version": "10.4.0",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "acorn": "^8.15.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^4.2.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.6.0",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-glob": {
      "version": "3.3.3",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.8"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fast-glob/node_modules/glob-parent": {
      "version": "5.1.2",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fastq": {
      "version": "1.19.1",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/file-entry-cache": {
      "version": "8.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flat-cache": "^4.0.0"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "4.0.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.4"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/flatted": {
      "version": "3.3.3",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/globals": {
      "version": "16.4.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/graphemer": {
      "version": "1.4.0",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/import-fresh": {
      "version": "3.3.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/js-yaml": {
      "version": "4.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/jsesc": {
      "version": "3.1.0",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "dev": true,
      "license": "MIT",
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/lru-cache": {
      "version": "5.1.1",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "yallist": "^3.0.2"
      }
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micromatch": {
      "version": "4.0.8",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "braces": "^3.0.3",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/minimatch": {
      "version": "3.1.2",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/nanoid": {
      "version": "3.3.11",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/node-releases": {
      "version": "2.0.23",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "2.3.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.6",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.11",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/react": {
      "version": "19.2.0",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.2.0",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.27.0"
      },
      "peerDependencies": {
        "react": "^19.2.0"
      }
    },
    "node_modules/react-refresh": {
      "version": "0.17.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-router": {
      "version": "7.15.1",
      "resolved": "https://registry.npmjs.org/react-router/-/react-router-7.15.1.tgz",
      "integrity": "sha512-R8rl9HhgikFYoPJymnUtPXWbnDb3oget6lQnfIoupbt61aT9aOhRkDsY2XRhZRyX1Z/8a5sL74fXmFNm3NRK5A==",
      "license": "MIT",
      "dependencies": {
        "cookie": "^1.0.1",
        "set-cookie-parser": "^2.6.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "react": ">=18",
        "react-dom": ">=18"
      },
      "peerDependenciesMeta": {
        "react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/react-router-dom": {
      "version": "7.15.1",
      "resolved": "https://registry.npmjs.org/react-router-dom/-/react-router-dom-7.15.1.tgz",
      "integrity": "sha512-AzF62gjY6U9rkMq4RfP/r2EVtQ7DMfNMjyOp/flLTCrtRylLiK4wT4pSq6O8rOXZ2eXdZYJPEYe+ifomiv+Igg==",
      "license": "MIT",
      "dependencies": {
        "react-router": "7.15.1"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "react": ">=18",
        "react-dom": ">=18"
      }
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/reusify": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/rollup": {
      "version": "4.52.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/estree": "1.0.8"
      },
      "bin": {
        "rollup": "dist/bin/rollup"
      },
      "engines": {
        "node": ">=18.0.0",
        "npm": ">=8.0.0"
      },
      "optionalDependencies": {
        "@rollup/rollup-android-arm-eabi": "4.52.4",
        "@rollup/rollup-android-arm64": "4.52.4",
        "@rollup/rollup-darwin-arm64": "4.52.4",
        "@rollup/rollup-darwin-x64": "4.52.4",
        "@rollup/rollup-freebsd-arm64": "4.52.4",
        "@rollup/rollup-freebsd-x64": "4.52.4",
        "@rollup/rollup-linux-arm-gnueabihf": "4.52.4",
        "@rollup/rollup-linux-arm-musleabihf": "4.52.4",
        "@rollup/rollup-linux-arm64-gnu": "4.52.4",
        "@rollup/rollup-linux-arm64-musl": "4.52.4",
        "@rollup/rollup-linux-loong64-gnu": "4.52.4",
        "@rollup/rollup-linux-ppc64-gnu": "4.52.4",
        "@rollup/rollup-linux-riscv64-gnu": "4.52.4",
        "@rollup/rollup-linux-riscv64-musl": "4.52.4",
        "@rollup/rollup-linux-s390x-gnu": "4.52.4",
        "@rollup/rollup-linux-x64-gnu": "4.52.4",
        "@rollup/rollup-linux-x64-musl": "4.52.4",
        "@rollup/rollup-openharmony-arm64": "4.52.4",
        "@rollup/rollup-win32-arm64-msvc": "4.52.4",
        "@rollup/rollup-win32-ia32-msvc": "4.52.4",
        "@rollup/rollup-win32-x64-gnu": "4.52.4",
        "@rollup/rollup-win32-x64-msvc": "4.52.4",
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/rollup/node_modules/@rollup/rollup-android-arm-eabi": {
      "version": "4.52.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.52.4.tgz",
      "integrity": "sha512-BTm2qKNnWIQ5auf4deoetINJm2JzvihvGb9R6K/ETwKLql/Bb3Eg2H1FBp1gUb4YGbydMA3jcmQTR73q7J+GAA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/rollup/node_modules/@rollup/rollup-android-arm64": {
      "version": "4.52.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.52.4.tgz",
      "integrity": "sha512-P9LDQiC5vpgGFgz7GSM6dKPCiqR3XYN1WwJKA4/BUVDjHpYsf3iBEmVz62uyq20NGYbiGPR5cNHI7T1HqxNs2w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/rollup/node_modules/@rollup/rollup-darwin-arm64": {
      "version": "4.52.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.52.4.tgz",
      "integrity": "sha512-QRWSW+bVccAvZF6cbNZBJwAehmvG9NwfWHwMy4GbWi/BQIA/laTIktebT2ipVjNncqE6GLPxOok5hsECgAxGZg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/rollup/node_modules/@rollup/rollup-darwin-x64": {
      "version": "4.52.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.52.4.tgz",
      "integrity": "sha512-hZgP05pResAkRJxL1b+7yxCnXPGsXU0fG9Yfd6dUaoGk+FhdPKCJ5L1Sumyxn8kvw8Qi5PvQ8ulenUbRjzeCTw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/rollup/node_modules/@rollup/rollup-freebsd-arm64": {
      "version": "4.52.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.52.4.tgz",
      "integrity": "sha512-xmc30VshuBNUd58Xk4TKAEcRZHaXlV+tCxIXELiE9sQuK3kG8ZFgSPi57UBJt8/ogfhAF5Oz4ZSUBN77weM+mQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/rollup/node_modules/@rollup/rollup-freebsd-x64": {
      "version": "4.52.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.52.4.tgz",
      "integrity": "sha512-WdSLpZFjOEqNZGmHflxyifolwAiZmDQzuOzIq9L27ButpCVpD7KzTRtEG1I0wMPFyiyUdOO+4t8GvrnBLQSwpw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/rollup/node_modules/@rollup/rollup-linux-arm-gnueabihf": {
      "version": "4.52.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.52.4.tgz",
      "integrity": "sha512-xRiOu9Of1FZ4SxVbB0iEDXc4ddIcjCv2aj03dmW8UrZIW7aIQ9jVJdLBIhxBI+MaTnGAKyvMwPwQnoOEvP7FgQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/rollup/node_modules/@rollup/rollup-linux-arm-musleabihf": {
      "version": "4.52.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.52.4.tgz",
      "integrity": "sha512-FbhM2p9TJAmEIEhIgzR4soUcsW49e9veAQCziwbR+XWB2zqJ12b4i/+hel9yLiD8pLncDH4fKIPIbt5238341Q==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/rollup/node_modules/@rollup/rollup-linux-arm64-gnu": {
      "version": "4.52.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.52.4.tgz",
      "integrity": "sha512-4n4gVwhPHR9q/g8lKCyz0yuaD0MvDf7dV4f9tHt0C73Mp8h38UCtSCSE6R9iBlTbXlmA8CjpsZoujhszefqueg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/rollup/node_modules/@rollup/rollup-linux-arm64-musl": {
      "version": "4.52.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.52.4.tgz",
      "integrity": "sha512-u0n17nGA0nvi/11gcZKsjkLj1QIpAuPFQbR48Subo7SmZJnGxDpspyw2kbpuoQnyK+9pwf3pAoEXerJs/8Mi9g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/rollup/node_modules/@rollup/rollup-linux-loong64-gnu": {
      "version": "4.52.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loong64-gnu/-/rollup-linux-loong64-gnu-4.52.4.tgz",
      "integrity": "sha512-0G2c2lpYtbTuXo8KEJkDkClE/+/2AFPdPAbmaHoE870foRFs4pBrDehilMcrSScrN/fB/1HTaWO4bqw+ewBzMQ==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/rollup/node_modules/@rollup/rollup-linux-ppc64-gnu": {
      "version": "4.52.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-ppc64-gnu/-/rollup-linux-ppc64-gnu-4.52.4.tgz",
      "integrity": "sha512-teSACug1GyZHmPDv14VNbvZFX779UqWTsd7KtTM9JIZRDI5NUwYSIS30kzI8m06gOPB//jtpqlhmraQ68b5X2g==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/rollup/node_modules/@rollup/rollup-linux-riscv64-gnu": {
      "version": "4.52.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.52.4.tgz",
      "integrity": "sha512-/MOEW3aHjjs1p4Pw1Xk4+3egRevx8Ji9N6HUIA1Ifh8Q+cg9dremvFCUbOX2Zebz80BwJIgCBUemjqhU5XI5Eg==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/rollup/node_modules/@rollup/rollup-linux-riscv64-musl": {
      "version": "4.52.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-musl/-/rollup-linux-riscv64-musl-4.52.4.tgz",
      "integrity": "sha512-1HHmsRyh845QDpEWzOFtMCph5Ts+9+yllCrREuBR/vg2RogAQGGBRC8lDPrPOMnrdOJ+mt1WLMOC2Kao/UwcvA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/rollup/node_modules/@rollup/rollup-linux-s390x-gnu": {
      "version": "4.52.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.52.4.tgz",
      "integrity": "sha512-seoeZp4L/6D1MUyjWkOMRU6/iLmCU2EjbMTyAG4oIOs1/I82Y5lTeaxW0KBfkUdHAWN7j25bpkt0rjnOgAcQcA==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/rollup/node_modules/@rollup/rollup-linux-x64-gnu": {
      "version": "4.52.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.52.4.tgz",
      "integrity": "sha512-Wi6AXf0k0L7E2gteNsNHUs7UMwCIhsCTs6+tqQ5GPwVRWMaflqGec4Sd8n6+FNFDw9vGcReqk2KzBDhCa1DLYg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/rollup/node_modules/@rollup/rollup-linux-x64-musl": {
      "version": "4.52.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.52.4.tgz",
      "integrity": "sha512-dtBZYjDmCQ9hW+WgEkaffvRRCKm767wWhxsFW3Lw86VXz/uJRuD438/XvbZT//B96Vs8oTA8Q4A0AfHbrxP9zw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/rollup/node_modules/@rollup/rollup-openharmony-arm64": {
      "version": "4.52.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-openharmony-arm64/-/rollup-openharmony-arm64-4.52.4.tgz",
      "integrity": "sha512-1ox+GqgRWqaB1RnyZXL8PD6E5f7YyRUJYnCqKpNzxzP0TkaUh112NDrR9Tt+C8rJ4x5G9Mk8PQR3o7Ku2RKqKA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ]
    },
    "node_modules/rollup/node_modules/@rollup/rollup-win32-arm64-msvc": {
      "version": "4.52.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.52.4.tgz",
      "integrity": "sha512-8GKr640PdFNXwzIE0IrkMWUNUomILLkfeHjXBi/nUvFlpZP+FA8BKGKpacjW6OUUHaNI6sUURxR2U2g78FOHWQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/rollup/node_modules/@rollup/rollup-win32-ia32-msvc": {
      "version": "4.52.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.52.4.tgz",
      "integrity": "sha512-AIy/jdJ7WtJ/F6EcfOb2GjR9UweO0n43jNObQMb6oGxkYTfLcnN7vYYpG+CN3lLxrQkzWnMOoNSHTW54pgbVxw==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/rollup/node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/scheduler": {
      "version": "0.27.0",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "6.3.1",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/set-cookie-parser": {
      "version": "2.7.2",
      "resolved": "https://registry.npmjs.org/set-cookie-parser/-/set-cookie-parser-2.7.2.tgz",
      "integrity": "sha512-oeM1lpU/UvhTxw+g3cIfxXHyJRc/uidd3yK1P242gzHds0udQBYzs3y8j4gCCW+ZJ7ad0yctld8RYO+bdurlvw==",
      "license": "MIT"
    },
    "node_modules/sharp": {
      "version": "0.34.4",
      "resolved": "https://registry.npmjs.org/sharp/-/sharp-0.34.4.tgz",
      "integrity": "sha512-FUH39xp3SBPnxWvd5iib1X8XY7J0K0X7d93sie9CJg2PO8/7gmg89Nve6OjItK53/MlAushNNxteBYfM6DEuoA==",
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@img/colour": "^1.0.0",
        "detect-libc": "^2.1.0",
        "semver": "^7.7.2"
      },
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-darwin-arm64": "0.34.4",
        "@img/sharp-darwin-x64": "0.34.4",
        "@img/sharp-libvips-darwin-arm64": "1.2.3",
        "@img/sharp-libvips-darwin-x64": "1.2.3",
        "@img/sharp-libvips-linux-arm": "1.2.3",
        "@img/sharp-libvips-linux-arm64": "1.2.3",
        "@img/sharp-libvips-linux-ppc64": "1.2.3",
        "@img/sharp-libvips-linux-s390x": "1.2.3",
        "@img/sharp-libvips-linux-x64": "1.2.3",
        "@img/sharp-libvips-linuxmusl-arm64": "1.2.3",
        "@img/sharp-libvips-linuxmusl-x64": "1.2.3",
        "@img/sharp-linux-arm": "0.34.4",
        "@img/sharp-linux-arm64": "0.34.4",
        "@img/sharp-linux-ppc64": "0.34.4",
        "@img/sharp-linux-s390x": "0.34.4",
        "@img/sharp-linux-x64": "0.34.4",
        "@img/sharp-linuxmusl-arm64": "0.34.4",
        "@img/sharp-linuxmusl-x64": "0.34.4",
        "@img/sharp-wasm32": "0.34.4",
        "@img/sharp-win32-arm64": "0.34.4",
        "@img/sharp-win32-ia32": "0.34.4",
        "@img/sharp-win32-x64": "0.34.4"
      }
    },
    "node_modules/sharp/node_modules/semver": {
      "version": "7.7.2",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.2.tgz",
      "integrity": "sha512-RF0Fw+rO5AMf9MAyaRXI4AV0Ulj5lMHqVxxdSgiVbixSCXoEmmX/jk0CuJw4+3SqroYO9VoUh+HcuJivvtJemA==",
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.15",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.3"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/tinyglobby/node_modules/fdir": {
      "version": "6.5.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/tinyglobby/node_modules/picomatch": {
      "version": "4.0.3",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/ts-api-utils": {
      "version": "2.1.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.12"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD",
      "optional": true
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/typescript": {
      "version": "5.9.3",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/typescript-eslint": {
      "version": "8.45.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/eslint-plugin": "8.45.0",
        "@typescript-eslint/parser": "8.45.0",
        "@typescript-eslint/typescript-estree": "8.45.0",
        "@typescript-eslint/utils": "8.45.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/undici-types": {
      "version": "7.13.0",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/update-browserslist-db": {
      "version": "1.1.3",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/vite": {
      "version": "7.1.9",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "esbuild": "^0.25.0",
        "fdir": "^6.5.0",
        "picomatch": "^4.0.3",
        "postcss": "^8.5.6",
        "rollup": "^4.43.0",
        "tinyglobby": "^0.2.15"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^20.19.0 || >=22.12.0",
        "jiti": ">=1.21.0",
        "less": "^4.0.0",
        "lightningcss": "^1.21.0",
        "sass": "^1.70.0",
        "sass-embedded": "^1.70.0",
        "stylus": ">=0.54.8",
        "sugarss": "^5.0.0",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "lightningcss": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/vite/node_modules/fdir": {
      "version": "6.5.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/vite/node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/vite/node_modules/picomatch": {
      "version": "4.0.3",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    }
  }
}



# FILE: ./eslint.config.js

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])



# FILE: ./plan.md

# Project Evolving Yoga — Full Architecture Redesign

## Architecture

```
React 19 + TypeScript + Vite + React Compiler + React Router v7
                    ↓
    BrowserRouter → App.tsx → Routes (7 pages)
                    ↓
    Shared: Navigation | Footer | XPToastStack
                    ↓
   ┌──────┬──────┬──────┬──────┬──────┬──────┬──────┐
  Home  Postures Practice Session Dashboard Benefits Tests
```

## Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | `HomePage` | Landing — hero, benefits, branches, CTA |
| `/postures` | `PosturesPage` | Full pose library with filters, search, detail modal |
| `/practice` | `PracticePage` | Routine builder — select poses, drag-reorder, presets |
| `/session` | `SessionPage` | Active session — webcam, countdown, feedback, summary |
| `/dashboard` | `DashboardPage` | Stats, streaks, badges, milestones, XP chart |
| `/benefits` | `BenefitsPage` | Educational page — benefits, 8 limbs, pranayama |
| `/tests` | `TestsPage` | Self-assessment tests (wraps existing UserTests) |

## Olaichuvadi Design Tokens

```
--primary-color: #b38b59    --primary-hover: #9a6b45
--secondary-color: #f5deb3  --accent-color: #654321
--light-bg: #f3e0b5        --dark-bg: #4a2c06
--text-color: #3b1e08      --text-light: #654321
--success-color: #8b6b30   --warning-color: #d4b676
--error-color: #8b4513
```

## Implementation Phases

### Phase 0: Setup
- Install `react-router-dom@^7`
- No config file changes

### Phase 1: Types & Utilities
- `src/types/yoga.ts` — shared types
- `src/types/mediapipe.d.ts` — MediaPipe globals
- `src/utils/poseMatch.ts` — stillness heuristic scoring
- `src/utils/feedbackEngine.ts` — correction cues
- `src/utils/gamification.ts` — XP, levels, combos
- `src/utils/confetti.ts` — canvas particle system
- `src/store/sessionStore.ts` — session config/result persistence

### Phase 2: Hooks
- `src/hooks/useWebcam.ts` — `getUserMedia` wrapper
- `src/hooks/usePoseDetection.ts` — MediaPipe Pose integration

### Phase 3: Shared Components
- `src/components/CountdownRing.tsx` + `.css` — SVG countdown
- `src/components/XPToast.tsx` + `.css` — global toast stack

### Phase 4: Pages
- `src/pages/HomePage.tsx` + `.css`
- `src/pages/PosturesPage.tsx` + `.css`
- `src/pages/PracticePage.tsx` + `.css`
- `src/pages/SessionPage.tsx` + `.css`
- `src/pages/DashboardPage.tsx` + `.css`
- `src/pages/BenefitsPage.tsx` + `.css`
- `src/pages/TestsPage.tsx`

### Phase 5: Integration
- `index.html` — MediaPipe CDN scripts
- `src/main.tsx` — BrowserRouter wrapper
- `src/App.tsx` — Routes, remove old layout
- `src/components/Navigation.tsx` + `.css` — NavLink-based, dark theme, hamburger
- `src/components/Footer.tsx` + `.css` — Link-based navigation
- `src/utils/appreciationUtils.ts` — extend UserStats, add methods
- `src/index.css` — global enhancements (app-main, page-wrapper, pose-img filter)

## Key Constraints
- No `enum` (erasableSyntaxOnly) — use string unions
- `import type` for type-only imports (verbatimModuleSyntax)
- No `any` except MediaPipe globals
- All CSS uses CSS variables, never hardcoded non-Olaichuvadi colors
- Mobile responsive at 768px breakpoint



# FILE: ./TODO.md

# Apply Olaichuvadi Style to Yoga Website

- [x] Update src/index.css: Change CSS variables to traditional Olaichuvadi colors (primary #b38b59, secondary #f5deb3, accent #654321, font #3b1e08).
- [x] Update src/components/PostureCategories.css: Set background to olaichuvadi.png with center/cover/no-repeat and overlay, change grid to 4 columns, add slide-in animations with translateX and opacity for columns (left-right for first 2, right-left for last 2) with delays.
- [x] Update src/components/IntroSection.css: Change background to beige gradient, add glowing box-shadow to h1.
- [x] Update src/components/UserTests.css: Change card backgrounds to #f3e0b5, style result values with maroon color, add hover effects (translateY and glow).
- [x] Update src/components/UserJourney.css: Update segment colors to traditional palette, ensure rounded bars and smooth reveal animations.
- [x] Update src/components/Footer.css: Set background to #4a2c06, text to light beige, add gold separator above contact info.



# FILE: ./vite.config.ts

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})



# FILE: ./tsconfig.app.json

{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "types": ["vite/client"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}



# FILE: ./package.json

{
  "name": "yoga",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router-dom": "^7.15.1",
    "sharp": "^0.34.4"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/node": "^24.6.0",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "babel-plugin-react-compiler": "^19.1.0-rc.3",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0",
    "typescript": "~5.9.3",
    "typescript-eslint": "^8.45.0",
    "vite": "^7.1.7"
  }
}



# FILE: ./README.md

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```



# FILE: ./docs/YOGA_REFERENCE.md

# Project Evolving Yoga — Reference

A comprehensive reference of the main branches, components, postures, breathing techniques, and supporting disciplines of yoga. Designed for learning or for wiring into the Evolving Yoga project.

---

## 🧘‍♀️ I. Main Branches of Yoga

Yoga is traditionally divided into six classical branches, each focusing on a different path to self-realization.

| No. | Branch | Focus | Description |
| --- | ----- | ----- | ----------- |
| 1 | **Hatha Yoga** | Physical Body | Emphasizes *asanas* (postures) and *pranayama* (breathing) to prepare the body and mind for meditation. |
| 2 | **Raja Yoga** | Mind Control | Known as the “Royal Path,” based on Patanjali’s *Ashtanga Yoga* (Eight Limbs) — emphasizes meditation and discipline. |
| 3 | **Karma Yoga** | Selfless Action | Path of service — doing one’s duty without attachment to results. |
| 4 | **Bhakti Yoga** | Devotion | Path of love and devotion toward the Divine through prayer, chanting, and surrender. |
| 5 | **Jnana Yoga** | Knowledge | Path of wisdom — realizing the true Self through study and contemplation. |
| 6 | **Kundalini Yoga** | Energy Awakening | Awakens spiritual energy (Kundalini) through postures, breath, and chanting. |

---

## 🌿 II. The Eight Limbs of Yoga (Ashtanga Yoga)

Patanjali’s Eight Limbs provide a practical roadmap for personal development and meditation.

| Limb No. | Sanskrit Term | Meaning / Practice | Focus Area |
| ---: | --- | --- | --- |
| 1 | **Yama** | Moral discipline | Ethical values and social conduct |
| 2 | **Niyama** | Personal observances | Self-purification and self-discipline |
| 3 | **Asana** | Physical postures | Strength, flexibility, stability |
| 4 | **Pranayama** | Breath control | Regulation of vital life energy |
| 5 | **Pratyahara** | Sense withdrawal | Control over sensory inputs |
| 6 | **Dharana** | Concentration | Focus on a single point or object |
| 7 | **Dhyana** | Meditation | Continuous, effortless focus |
| 8 | **Samadhi** | Enlightenment | Union with higher consciousness |

---

## 💪 III. Major Yoga Posture (Asana) Categories

### 1. Standing Asanas

Improve balance, strength, and grounding.

Examples:

- Tadasana (Mountain Pose)
- Trikonasana (Triangle Pose)
- Virabhadrasana I–III (Warrior Poses)
- Utkatasana (Chair Pose)

### 2. Sitting Asanas

Enhance flexibility and prepare for meditation.

Examples:

- Padmasana (Lotus Pose)
- Sukhasana (Easy Pose)
- Vajrasana (Thunderbolt Pose)
- Baddha Konasana (Bound Angle Pose)

### 3. Forward Bends

Promote relaxation and spine flexibility.

Examples:

- Paschimottanasana (Seated Forward Bend)
- Uttanasana (Standing Forward Fold)
- Janu Sirsasana (Head-to-Knee Pose)

### 4. Backward Bends

Energize the body and open the chest.

Examples:

- Bhujangasana (Cobra Pose)
- Dhanurasana (Bow Pose)
- Ustrasana (Camel Pose)
- Chakrasana (Wheel Pose)

### 5. Twisting Asanas

Detoxify and tone the internal organs.

Examples:

- Ardha Matsyendrasana (Half Spinal Twist)
- Bharadvajasana (Seated Twist)

### 6. Balancing Asanas

Develop focus, coordination, and stability.

Examples:

- Vrikshasana (Tree Pose)
- Garudasana (Eagle Pose)
- Bakasana (Crane Pose)

### 7. Inversions

Improve circulation and rejuvenate the brain.

Examples:

- Sirsasana (Headstand)
- Sarvangasana (Shoulder Stand)
- Halasana (Plough Pose)

### 8. Restorative / Relaxation Asanas

Calm the nervous system and reduce fatigue.

Examples:

- Balasana (Child’s Pose)
- Savasana (Corpse Pose)
- Supta Baddha Konasana (Reclined Bound Angle Pose)

---

## 🌬️ IV. Major Breathing Techniques (Pranayama)

| No. | Technique | Description | Effect |
| ---: | --- | --- | --- |
| 1 | **Anulom Vilom** | Alternate nostril breathing | Balances mind and body |
| 2 | **Bhastrika** | Bellows breath | Energizes and cleanses |
| 3 | **Kapalabhati** | Skull-shining breath | Detoxifies lungs, improves digestion |
| 4 | **Bhramari** | Humming bee breath | Reduces anxiety and stress |
| 5 | **Ujjayi** | Oceanic breath | Enhances focus, generates warmth |
| 6 | **Sheetali / Sheetkari** | Cooling breaths | Cools the body, reduces anger |
| 7 | **Nadi Shodhana** | Channel purification | Balances both brain hemispheres |

---

## 🧠 V. Key Meditation and Mindfulness Practices

- **Dharana:** Concentration on one point (like a flame or mantra).
- **Dhyana:** Flowing, uninterrupted meditation.
- **Trataka:** Candle gazing to enhance focus.
- **Yoga Nidra:** Guided deep relaxation (yogic sleep).
- **Mantra Meditation:** Repetition of sacred sounds (like “Om”).

---

## 🪷 VI. Supporting Yogic Disciplines

| Discipline | Purpose |
| --- | --- |
| **Mudras** | Hand gestures that channel energy (e.g., Gyan Mudra, Prana Mudra) |
| **Bandhas** | Energy locks (e.g., Mula Bandha, Uddiyana Bandha) |
| **Kriyas** | Cleansing techniques (e.g., Neti, Kapalabhati, Dhauti) |
| **Chakras** | Energy centers in the body (Root to Crown) |
| **Mantras** | Sound vibrations used for meditation and focus |
| **Ayurvedic Lifestyle** | Diet, sleep, and detox principles complementing yoga practice |

---

## 🕊️ VII. Modern Yoga Styles (Contemporary Variations)

| Style | Description |
| --- | --- |
| **Vinyasa Yoga** | Flow-based practice linking breath with movement |
| **Ashtanga Yoga** | Structured sequence of poses emphasizing strength and discipline |
| **Iyengar Yoga** | Focus on alignment and use of props |
| **Power Yoga** | Dynamic, fitness-oriented yoga |
| **Yin Yoga** | Slow-paced stretching for deep tissue release |
| **Restorative Yoga** | Gentle, supported poses for relaxation |
| **Aerial / Aqua Yoga** | Modern adaptations using hammock or water for support |

---

## 🏁 Conclusion

Yoga is a multi-dimensional discipline — blending philosophy, posture, breath, and meditation to achieve harmony of body, mind, and spirit. It includes diverse branches, postures, and breathing methods, each contributing uniquely to physical health, mental clarity, and spiritual awakening.

---

If you'd like, I can:

- Convert this into a nicely formatted webpage within the app (React component + route).
- Produce a printable cheat-sheet or infographics (SVG/PNG) for hackathon slides.
- Create an interactive Pose Library page that links each pose to alignment checks and adaptive rules in the trainer.

Tell me which output you prefer and I’ll implement it next.



# FILE: ./docs/YOGA_USER_TESTS.md

# Yoga User Test Cases (No Sensors)

## 1. Breath & Lung Efficiency

* **Breath-Holding Test (BHT)**

  * **Description:** Hold breath after a normal inhalation.
  * **Measurement:** Seconds (use a stopwatch or phone timer).
  * **Expected Ranges:**

    * <20 sec → Low
    * 20–40 sec → Average
    * 40–60 sec → Good
    * > 60 sec → Excellent

* **Controlled Breathing Test**

  * **Description:** Follow a breathing rhythm (e.g., inhale 4 sec, hold 4 sec, exhale 4 sec) for 1–2 minutes.
  * **Measurement:** Can user maintain rhythm without discomfort? (Yes/No)

---

## 2. Balance & Coordination

* **Single-Leg Stand (Tree Pose / Vrikshasana)**

  * **Measurement:** Seconds user can maintain balance.
  * **Ranges:** <15 sec → Low, 15–30 sec → Average, 30–60 sec → Good, >60 sec → Excellent

* **Closed-Eyes Balance Test**

  * **Measurement:** Seconds user can maintain Tree Pose with eyes closed.

* **Dynamic Balance Test**

  * **Description:** Transition between Warrior III → Tree → Chair Pose without wobbling.
  * **Measurement:** Count successful transitions (0–10).

---

## 3. Flexibility & Mobility

* **Forward Bend Test (Uttanasana / Paschimottanasana)**

  * **Measurement:** Fingertip-to-floor distance (cm).
  * **Ranges:** >20 cm → Low, 10–20 cm → Average, 0–10 cm → Good, Touching floor → Excellent

* **Side Stretch Test**

  * **Measurement:** Distance from hand to floor during lateral bend.

* **Spinal Twist Test**

  * **Measurement:** Ability to twist comfortably to each side without pain (self-assessed on scale 1–10).

* **Backbend Test (Bhujangasana / Ustrasana / Wheel Pose)**

  * **Measurement:** Self-assessed arch depth (1–10 scale) or number of seconds held.

---

## 4. Posture Endurance & Strength

* **Plank / Forearm Balance**

  * **Measurement:** Seconds user can hold correct position.

* **Chair Pose (Utkatasana) Endurance**

  * **Measurement:** Seconds user can maintain pose.

* **Warrior II Hold**

  * **Measurement:** Seconds held without losing form.

* **Boat Pose (Navasana) Hold**

  * **Measurement:** Seconds held with straight back.

---

## 5. Relaxation & Mindfulness

* **Savasana (Corpse Pose) Duration**

  * **Measurement:** Time user can stay relaxed, eyes closed, without moving.

* **Guided Breathing Focus Test**

  * **Measurement:** Self-assessment scale (1–10) on concentration during breathing practice.

---

## 6. Yoga Flow & Endurance

* **Sun Salutation Repetitions**

  * **Measurement:** Count cycles completed in 5 minutes.

* **Yoga Flow Continuity Test**

  * **Measurement:** Number of poses performed consecutively without rest.

* **Recovery Test (Self-Monitored)**

  * **Description:** User notes how long it takes to feel calm/breath normal after a sequence.
  * **Measurement:** Self-timed in seconds or subjective rating (1–10).

---

✅ **Key Points:**

* All tests can be **timed with a stopwatch, phone, or manual count**.
* Self-assessment scales (1–10) are used where exact measurement is not feasible.
* No external sensors, heart rate monitors, or devices are required.



# FILE: ./src/App.tsx

import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import XPToastStack from './components/XPToast'
import HomePage from './pages/HomePage'
import PosturesPage from './pages/PosturesPage'
import PracticePage from './pages/PracticePage'
import SessionPage from './pages/SessionPage'
import DashboardPage from './pages/DashboardPage'
import BenefitsPage from './pages/BenefitsPage'
import TestsPage from './pages/TestsPage'

export default function App() {
  return (
    <>
      <Navigation />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/postures" element={<PosturesPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/session" element={<SessionPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/benefits" element={<BenefitsPage />} />
          <Route path="/tests" element={<TestsPage />} />
        </Routes>
      </main>
      <Footer />
      <XPToastStack />
    </>
  )
}



# FILE: ./src/App.css

/* Global styles */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #2c3e50;
}

main {
  padding-top: 80px; /* for fixed nav */
}

/* Container utility */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Benefits section */
.benefits-section {
  padding: 5rem 0;
  background: white;
}

.benefits-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.benefits-section ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
}

.benefits-section li {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #3498db;
}

/* Postures section */
.postures-section {
  padding: 5rem 0;
  background: #f8f9fa;
}

.postures-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
}

@media (max-width: 768px) {
  .benefits-section h2,
  .postures-section h2 {
    font-size: 2rem;
  }

  .benefits-section ul {
    grid-template-columns: 1fr;
  }
}



# FILE: ./src/main.tsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)



# FILE: ./src/index-old.css

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

:root {
  font-family: 'Poppins', system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color: #213547;
  background-color: #ffffff;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* CSS Variables for consistent spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-xxl: 3rem;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0 0 var(--space-md) 0;
  font-weight: 600;
  line-height: 1.2;
}

p {
  margin: 0 0 var(--space-md) 0;
}

a {
  font-weight: 500;
  color: #3498db;
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  color: #2980b9;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: var(--space-sm) var(--space-md);
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #3498db;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
}

button:hover {
  background-color: #2980b9;
  border-color: #2980b9;
}

button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

img {
  max-width: 100%;
  height: auto;
}



# FILE: ./src/index.css

@import url('https://fonts.googleapis.com/css2?family=Gurajada:wght@400&family=Baloo+Thambi+2:wght@400;500;600;700&display=swap');

:root {
  font-family: 'Gurajada', 'Baloo Thambi 2', serif;
  line-height: 1.5;
  font-weight: 400;

  color: #3b2f1c;
  background-color: #ffffff;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* CSS Variables for consistent spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-xxl: 3rem;

  /* Traditional Olaichuvadi color palette */
  --primary-color: #b38b59;
  --primary-hover: #9a6b45;
  --secondary-color: #f5deb3;
  --accent-color: #654321;
  --light-bg: #f3e0b5;
  --dark-bg: #4a2c06;
  --text-color: #3b1e08;
  --text-light: #654321;
  --success-color: #8b6b30;
  --warning-color: #d4b676;
  --error-color: #8b4513;

  /* Animation variables */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  color: var(--text-color);
  background: url('/assets/olaichivadi-bg.jpg') repeat;
  background-size: cover;
  position: relative;
}

body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(212, 182, 118, 0.1) 0%, rgba(139, 107, 48, 0.2) 50%, rgba(198, 167, 111, 0.1) 100%);
  pointer-events: none;
  z-index: -1;
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Focus styles for accessibility */
*:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

button:focus,
a:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

/* Skip link for screen readers */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--primary-color);
  color: white;
  padding: 8px;
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 6px;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0 0 var(--space-md) 0;
  font-weight: 600;
  line-height: 1.2;
  color: var(--secondary-color);
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
  letter-spacing: 0.5px;
}

p {
  margin: 0 0 var(--space-md) 0;
}

a {
  font-weight: 500;
  color: var(--primary-color);
  text-decoration: none;
  transition: color var(--transition-normal);
}

a:hover {
  color: var(--primary-hover);
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: var(--space-sm) var(--space-md);
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: var(--primary-color);
  color: white;
  cursor: pointer;
  transition: background-color var(--transition-normal), border-color var(--transition-normal), transform var(--transition-fast);
}

button:hover {
  background-color: var(--primary-hover);
  border-color: var(--primary-hover);
  transform: translateY(-1px);
}

button:active {
  transform: translateY(0);
}

button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

img {
  max-width: 100%;
  height: auto;
}

/* Utility classes */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.fade-in {
  animation: fadeIn var(--transition-slow) ease-in;
}

.fade-up {
  animation: fadeUp var(--transition-slow) ease-out;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-in-left {
  animation: slideInLeft var(--transition-slow) ease-out;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-in-right {
  animation: slideInRight var(--transition-slow) ease-out;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* App main — nav clearance */
.app-main {
  padding-top: 60px;
  min-height: calc(100vh - 60px);
}

/* Page entry animation */
.page-wrapper {
  animation: pageEnter 0.35s ease-out both;
}

@keyframes pageEnter {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Page header utility */
.page-header {
  text-align: center;
  padding: 2rem 2rem 0;
}
.page-header h1 {
  color: var(--accent-color);
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.page-header p {
  color: var(--text-light);
  font-size: 1rem;
}

/* Responsive breakpoints */
@media (max-width: 768px) {
  :root {
    --space-xl: 1.5rem;
    --space-xxl: 2rem;
  }

  h1 {
    font-size: 1.8rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  h3 {
    font-size: 1.4rem;
  }
}

@media (max-width: 480px) {
  :root {
    --space-lg: 1rem;
    --space-xl: 1.25rem;
    --space-xxl: 1.5rem;
  }

  h1 {
    font-size: 1.6rem;
  }

  h2 {
    font-size: 1.4rem;
  }

  h3 {
    font-size: 1.2rem;
  }
}



# FILE: ./src/App-old.tsx

import './App.css'
import Navigation from './components/Navigation'
import IntroSection from './components/IntroSection'
import BranchesSection from './components/BranchesSection'
import YogaTrainer from './components/YogaTrainer'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navigation />
      <main>
        <IntroSection />
        <section id="benefits" className="benefits-section">
          <div className="container">
            <h2>Benefits of Yoga</h2>
            <ul>
              <li>Improves flexibility, strength, and balance</li>
              <li>Reduces stress and promotes relaxation</li>
              <li>Enhances mental clarity and focus</li>
              <li>Supports cardiovascular and respiratory health</li>
              <li>Encourages mindfulness and spiritual growth</li>
            </ul>
          </div>
        </section>
        <BranchesSection />
        <section id="postures" className="postures-section">
          <div className="container">
            <h2>Yoga Postures</h2>
            <YogaTrainer />
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}

export default App



# FILE: ./src/hooks/useWebcam.ts

import { useEffect, useRef, useState, useCallback } from 'react'

export function useWebcam(
  videoRef: React.RefObject<HTMLVideoElement | null>
): { isReady: boolean; error: string | null; stop: () => void } {
  const [isReady, setIsReady] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const streamRef = useRef<MediaStream | null>(null)

  const stop = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop())
      streamRef.current = null
    }
    setIsReady(false)
  }, [])

  useEffect(() => {
    let mounted = true

    async function start() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 640, height: 480, facingMode: 'user' },
        })

        if (!mounted) {
          stream.getTracks().forEach(t => t.stop())
          return
        }

        streamRef.current = stream
        const video = videoRef.current
        if (video) {
          video.srcObject = stream
          video.onloadedmetadata = () => {
            if (mounted) setIsReady(true)
          }
        }
      } catch (err: unknown) {
        if (!mounted) return
        if (err instanceof DOMException) {
          if (err.name === 'NotAllowedError') {
            setError('Camera permission denied. Grant access in browser settings.')
          } else if (err.name === 'NotFoundError') {
            setError('No camera detected on this device.')
          } else {
            setError(`Camera error: ${err.message}`)
          }
        } else {
          setError('Failed to access camera.')
        }
      }
    }

    start()

    return () => {
      mounted = false
      stop()
    }
  }, [videoRef, stop])

  return { isReady, error, stop }
}



# FILE: ./src/hooks/usePoseDetection.ts

/// <reference path="../types/mediapipe.d.ts" />

import { useEffect, useRef, useState, useCallback } from 'react'
import { scorePose, resetPoseBuffer } from '../utils/poseMatch'

export function usePoseDetection(
  videoRef: React.RefObject<HTMLVideoElement | null>,
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  isActive: boolean
): { landmarks: NormalizedLandmark[] | null; matchScore: number; fps: number } {
  const [landmarks, setLandmarks] = useState<NormalizedLandmark[] | null>(null)
  const [matchScore, setMatchScore] = useState(50)
  const [fps, setFps] = useState(0)

  const fpsRef = useRef<number[]>([])
  const animRef = useRef<number | null>(null)
  const cameraRef = useRef<any>(null)

  const drawSkeleton = useCallback((landmarks: NormalizedLandmark[]) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const video = videoRef.current
    if (!video) return

    canvas.width = video.videoWidth || 640
    canvas.height = video.videoHeight || 480

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (typeof drawConnectors !== 'undefined' && typeof POSE_CONNECTIONS !== 'undefined') {
      drawConnectors(ctx, landmarks, POSE_CONNECTIONS, {
        color: 'rgba(179, 139, 89, 0.85)',
        lineWidth: 2.5,
      })
    }
    if (typeof drawLandmarks !== 'undefined') {
      drawLandmarks(ctx, landmarks, {
        color: '#f5deb3',
        radius: 4,
      })
    }
  }, [canvasRef, videoRef])

  const trackFps = useCallback(() => {
    const now = performance.now()
    fpsRef.current.push(now)
    if (fpsRef.current.length > 10) {
      fpsRef.current.shift()
    }
    if (fpsRef.current.length >= 2) {
      const avgDelta = (fpsRef.current[fpsRef.current.length - 1] - fpsRef.current[0]) / (fpsRef.current.length - 1)
      setFps(Math.round(1000 / avgDelta))
    }
  }, [])

  useEffect(() => {
    if (!isActive) {
      if (cameraRef.current) {
        cameraRef.current.stop()
        cameraRef.current = null
      }
      setLandmarks(null)
      setMatchScore(50)
      setFps(0)
      resetPoseBuffer()
      return
    }

    if (typeof Pose === 'undefined') {
      setMatchScore(50)
      return
    }

    const video = videoRef.current
    const canvas = canvasRef.current
    if (!video || !canvas) return

    const pose = new Pose({
      locateFile: (f: string) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${f}`,
    })

    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    })

    pose.onResults((results: any) => {
      if (!results.poseLandmarks) return

      const detected = results.poseLandmarks as NormalizedLandmark[]
      setLandmarks(detected)
      drawSkeleton(detected)
      const sc = scorePose(detected)
      setMatchScore(sc)
      trackFps()
    })

    const camera = new Camera(video, {
      onFrame: async () => {
        await pose.send({ image: video })
      },
      width: 640,
      height: 480,
    })

    cameraRef.current = camera
    camera.start().catch(() => {
      // camera start failed — fallback
    })

    return () => {
      if (cameraRef.current) {
        cameraRef.current.stop()
        cameraRef.current = null
      }
      if (animRef.current) {
        cancelAnimationFrame(animRef.current)
      }
    }
  }, [isActive, videoRef, canvasRef, drawSkeleton, trackFps])

  return { landmarks, matchScore, fps }
}



# FILE: ./src/components/XPToast.tsx

import { useState, useEffect, useCallback, useRef } from 'react'
import './XPToast.css'

interface Toast {
  id: number
  text: string
}

let nextId = 0
let addToastFn: ((text: string) => void) | null = null

export function showToast(text: string): void {
  if (addToastFn) {
    addToastFn(text)
  }
}

export default function XPToastStack() {
  const [toasts, setToasts] = useState<Toast[]>([])
  const timersRef = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map())

  const addToast = useCallback((text: string) => {
    const id = nextId++
    setToasts(prev => [...prev.slice(-3), { id, text }])
    const timer = setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
      timersRef.current.delete(id)
    }, 2000)
    timersRef.current.set(id, timer)
  }, [])

  useEffect(() => {
    addToastFn = addToast
    return () => {
      addToastFn = null
    }
  }, [addToast])

  useEffect(() => {
    return () => {
      for (const timer of timersRef.current.values()) {
        clearTimeout(timer)
      }
    }
  }, [])

  if (toasts.length === 0) return null

  return (
    <div className="xp-toast-stack">
      {toasts.map(t => (
        <div key={t.id} className="xp-toast">
          {t.text}
        </div>
      ))}
    </div>
  )
}



# FILE: ./src/components/AppreciationDashboard.tsx

import { useState, useEffect } from 'react'
import { appreciationManager, appreciationUIUtils, type UserStats, type ProgressMilestone } from '../utils/appreciationUtils'
import './AppreciationDashboard.css'

export default function AppreciationDashboard() {
  const [stats, setStats] = useState<UserStats>(appreciationManager.getStats())
  const [milestones, setMilestones] = useState<ProgressMilestone[]>([])
  const [motivationalMessage, setMotivationalMessage] = useState('')

  useEffect(() => {
    // Update stats and milestones on component mount
    setStats(appreciationManager.getStats())
    setMilestones(appreciationManager.getProgressMilestones())
    setMotivationalMessage(appreciationManager.generateMotivationalMessage())
  }, [])

  const handleShareAchievement = () => {
    const summary = appreciationManager.getAchievementSummary()
    if (navigator.share) {
      navigator.share({
        title: 'My Yoga Journey',
        text: summary,
        url: window.location.href,
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(summary).then(() => {
        alert('Achievement summary copied to clipboard!')
      })
    }
  }

  const handleResetStats = () => {
    if (window.confirm('Are you sure you want to reset all your progress? This cannot be undone.')) {
      appreciationManager.resetStats()
      setStats(appreciationManager.getStats())
      setMilestones(appreciationManager.getProgressMilestones())
      setMotivationalMessage(appreciationManager.generateMotivationalMessage())
    }
  }

  return (
    <section id="appreciation" className="appreciation-dashboard">
      <div className="container">
        <h2>Your Yoga Journey</h2>

        {/* Motivational Message */}
        <div className="motivational-card">
          <div className="motivation-icon">💫</div>
          <p className="motivation-text">{motivationalMessage}</p>
          <button
            className="new-message-btn"
            onClick={() => setMotivationalMessage(appreciationManager.generateMotivationalMessage())}
            aria-label="Get new motivational message"
          >
            ✨ New Message
          </button>
        </div>

        {/* Stats Overview */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <h3>{stats.totalSessions}</h3>
              <p>Total Sessions</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⏱️</div>
            <div className="stat-content">
              <h3>{appreciationUIUtils.formatDuration(stats.totalPracticeTime)}</h3>
              <p>Total Practice Time</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🔥</div>
            <div className="stat-content">
              <h3>{stats.currentStreak}</h3>
              <p>Current Streak</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🏆</div>
            <div className="stat-content">
              <h3>{stats.longestStreak}</h3>
              <p>Longest Streak</p>
            </div>
          </div>
        </div>

        {/* Progress Milestones */}
        <div className="milestones-section">
          <h3>Progress Goals</h3>
          <div className="milestones-grid">
            {milestones.map((milestone) => {
              const progress = appreciationUIUtils.calculateProgress(milestone.current, milestone.target)
              const encouragement = appreciationUIUtils.getEncouragementMessage(progress)

              return (
                <div key={milestone.id} className="milestone-card">
                  <div className="milestone-header">
                    <h4>{milestone.title}</h4>
                    <span className="milestone-progress">{Math.round(progress)}%</span>
                  </div>
                  <p className="milestone-description">{milestone.description}</p>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <div className="milestone-details">
                    <span>{milestone.current} / {milestone.target} {milestone.unit}</span>
                    <span className="encouragement">{encouragement}</span>
                  </div>
                  <p className="milestone-reward">Reward: {milestone.reward}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Badges Collection */}
        <div className="badges-section">
          <h3>Your Achievements</h3>
          {stats.badges.length === 0 ? (
            <div className="no-badges">
              <p>No badges earned yet. Keep practicing to unlock achievements! 🌱</p>
            </div>
          ) : (
            <div className="badges-grid">
              {stats.badges.map((badge) => (
                <div
                  key={badge.id}
                  className="badge-card"
                  style={{ borderColor: appreciationUIUtils.getBadgeColor(badge.category) }}
                >
                  <div className="badge-icon">{badge.icon}</div>
                  <div className="badge-content">
                    <h4>{badge.name}</h4>
                    <p>{badge.description}</p>
                    <small>Earned: {new Date(badge.earnedDate).toLocaleDateString()}</small>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Favorite Pose */}
        {stats.favoritePose && (
          <div className="favorite-pose-card">
            <h3>Your Favorite Pose</h3>
            <div className="favorite-content">
              <div className="pose-icon">🧘</div>
              <div>
                <h4>{stats.favoritePose}</h4>
                <p>This pose has been part of your most recent practice sessions.</p>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="dashboard-actions">
          <button className="share-btn" onClick={handleShareAchievement}>
            📤 Share Achievements
          </button>
          <button className="reset-btn" onClick={handleResetStats}>
            🔄 Reset Progress
          </button>
        </div>
      </div>
    </section>
  )
}



# FILE: ./src/components/YogaTrainer.tsx

import { useEffect, useState, useRef } from 'react'
import { loadState, saveState } from '../utils/localStorage'
import './YogaTrainer.css'
import POSTURES from '../data/postures.json'

type SessionData = {
  date: string
  holdSeconds: number
  breathsPerMinute: number
  energy: number
}

type TrainerState = {
  sessions: SessionData[]
  nextHoldSeconds: number
  streak: number
}

const STORAGE_KEY = 'yoga.trainer.v1'

function defaultState(): TrainerState {
  return { sessions: [], nextHoldSeconds: 20, streak: 0 }
}

function calcEnergy(hr: number | null, motion: number, consistency: number) {
  // simple normalized energy metric 0..100
  const hrScore = hr ? Math.max(0, Math.min(1, (220 - hr) / 100)) : 0.5
  const motionScore = Math.max(0, Math.min(1, motion))
  const consScore = Math.max(0, Math.min(1, consistency))
  return Math.round((0.5 * hrScore + 0.3 * motionScore + 0.2 * consScore) * 100)
}

export default function YogaTrainer() {
  const [state, setState] = useState<TrainerState>(() => loadState(STORAGE_KEY) ?? defaultState())
  const [running, setRunning] = useState(false)
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef<number | null>(null)
  const [energy, setEnergy] = useState(50)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<string>('All')

  const categories = Array.from(new Set(['All', ...POSTURES.map((p: any) => p.category)]))
  const [selected, setSelected] = useState<any | null>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setSelected(null)
    }
    if (selected) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected])


  useEffect(() => {
    // persist
    saveState(STORAGE_KEY, state)
  }, [state])

  useEffect(() => {
    if (running) {
      intervalRef.current = window.setInterval(() => setTimer((t) => t + 1), 1000)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
      setTimer(0)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [running])

  useEffect(() => {
    // simple simulated sensor sampling to update energy visualization
    const id = window.setInterval(() => {
      const fakeHeart = 60 + Math.round(Math.random() * 60)
      const fakeMotion = running ? 0.6 : 0.05
      const consistency = Math.min(1, state.streak / 7)
      setEnergy(calcEnergy(fakeHeart, fakeMotion, consistency))
    }, 2000)
    return () => clearInterval(id)
  }, [running, state.streak])

  function completeSession() {
    const s: SessionData = {
      date: new Date().toISOString(),
      holdSeconds: state.nextHoldSeconds,
      breathsPerMinute: 6,
      energy,
    }
    const sessions = [...state.sessions, s].slice(-30)
    // update streak: if last session was yesterday or today, increment, else reset
    const lastDate = state.sessions.length ? new Date(state.sessions[state.sessions.length - 1].date) : null
    let streak = 1
    if (lastDate) {
      const diffDays = Math.floor((Date.now() - lastDate.getTime()) / (1000 * 60 * 60 * 24))
      streak = diffDays <= 1 ? state.streak + 1 : 1
    }

    // adaptive rule: after 3 consistent days, increase hold by 10%
    let nextHold = state.nextHoldSeconds
    if (streak >= 3) nextHold = Math.round(nextHold * 1.1)

    const newState: TrainerState = { sessions, nextHoldSeconds: nextHold, streak }
    setState(newState)
    setRunning(false)
  }

  function resetHistory() {
    const s = defaultState()
    setState(s)
  }

  return (
    <div className="trainer-root">
      <section className="mandala-wrap">
        <div className="mandala" style={{ ['--energy' as any]: `${energy}%` }} aria-hidden>
          <div className="mandala-core">{energy}</div>
        </div>
        <div className="trainer-stats">
          <div>Next hold: {state.nextHoldSeconds}s</div>
          <div>Streak: {state.streak} days</div>
          <div>Sessions: {state.sessions.length}</div>
        </div>
      </section>

      <section className="controls">
        <div className="timer">{running ? `Holding: ${timer}s` : `Ready — ${state.nextHoldSeconds}s hold`}</div>
        <div className="buttons">
          <button onClick={() => setRunning((r) => !r)}>{running ? 'Stop' : 'Start'}</button>
          <button onClick={completeSession} title="Mark session complete">Complete</button>
          <button onClick={resetHistory}>Reset</button>
        </div>
      </section>

      {/* sensors removed — using simulated offline values */}

      <section className="history">
        <h3>Recent sessions</h3>
        <ul>
          {state.sessions.slice().reverse().map((s) => (
            <li key={s.date}>
              <strong>{new Date(s.date).toLocaleDateString()}</strong> — hold {s.holdSeconds}s — energy {s.energy}
            </li>
          ))}
          {state.sessions.length === 0 && <li>No sessions yet — start with Start → Complete</li>}
        </ul>
      </section>

      <section className="pose-library">
        <h3>Pose Library</h3>

        <div className="pose-controls">
          <div className="search-wrap">
            <input aria-label="Search poses" placeholder="Search poses (name or benefit)" value={search} onChange={(e) => setSearch(e.target.value)} />
            {search && <button className="clear" onClick={() => setSearch('')} aria-label="Clear search">✕</button>}
          </div>
          <div className="tabs" role="tablist" aria-label="Pose categories">
            {categories.map((c) => (
              <button key={c} role="tab" aria-selected={c === category} className={c === category ? 'active' : ''} onClick={() => setCategory(c)}>{c}</button>
            ))}
          </div>
        </div>

        <div className="poses">
          {POSTURES.filter((p: any) => {
            if (category !== 'All' && p.category !== category) return false
            if (!search) return true
            const s = search.toLowerCase()
            return p.name.toLowerCase().includes(s) || (p.benefits || []).some((b: string) => b.toLowerCase().includes(s))
          }).map((p: any) => (
            <article key={p.name} className="pose" tabIndex={0} onClick={() => setSelected(p)} onKeyDown={(e) => { if (e.key === 'Enter') setSelected(p) }}>
              <div className="pose-head">
                <h4>{p.name}</h4>
                <small className="cat">{p.category}</small>
              </div>
              <div className="pose-body">
                <img src={`/${p.image}`} alt={p.name} width={160} height={120} loading="lazy" />
                <div className="pose-info">
                  <ul>
                    {(p.benefits || []).slice(0, 4).map((b: string, i: number) => <li key={i}>{b}</li>)}
                  </ul>
                  <div className="actions">
                    <button onClick={(ev) => { ev.stopPropagation(); setSelected(p) }}>View details</button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {selected && (
          <div className="modal" role="dialog" aria-modal="true" aria-label={selected.name} onClick={() => setSelected(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close">✕</button>
              <div className="modal-row">
                <img src={`/${selected.image}`} alt={selected.name} width={320} height={240} />
                <div>
                  <h2>{selected.name}</h2>
                  <p className="muted">{selected.category}</p>
                  <h4>Benefits</h4>
                  <ul>{(selected.benefits || []).map((b: string, i: number) => <li key={i}>{b}</li>)}</ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}



# FILE: ./src/components/XPToast.css

.xp-toast-stack {
  position: fixed;
  top: 80px;
  right: 1rem;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  pointer-events: none;
}

.xp-toast {
  background: #2a1a0a;
  color: #b38b59;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(179, 139, 89, 0.3);
  animation: toastSlideIn 0.35s ease-out;
  white-space: nowrap;
}

@keyframes toastSlideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}



# FILE: ./src/components/CountdownRing.tsx

import './CountdownRing.css'

interface CountdownRingProps {
  total: number
  remaining: number
  matchScore: number
}

export default function CountdownRing({ total, remaining, matchScore }: CountdownRingProps) {
  const progress = total > 0 ? remaining / total : 0
  const circumference = 339.3
  const offset = circumference * (1 - progress)

  const ringColor =
    matchScore < 30 ? '#e74c3c'
    : matchScore >= 85 ? '#27ae60'
    : matchScore >= 65 ? '#b38b59'
    : '#b38b59'

  const paused = matchScore < 30

  return (
    <div className="countdown-ring-wrapper">
      <svg className="countdown-ring" viewBox="0 0 120 120">
        <circle
          className="ring-bg"
          cx="60" cy="60" r="54"
        />
        <circle
          className="ring-fill"
          cx="60" cy="60" r="54"
          strokeDasharray={circumference}
          strokeDashoffset={paused ? offset : offset}
          style={{
            stroke: ringColor,
            transition: paused ? 'none' : 'stroke-dashoffset 1s linear',
          }}
        />
        <text x="60" y="68" textAnchor="middle" className="ring-text">
          {paused ? '—' : `${Math.ceil(remaining)}s`}
        </text>
      </svg>
      {paused && <div className="ring-pause-label">Resume position…</div>}
    </div>
  )
}



# FILE: ./src/components/AppreciationDashboard.css

.appreciation-dashboard {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
}

.appreciation-dashboard h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
}

.appreciation-dashboard h3 {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #34495e;
  text-align: center;
}

/* Motivational Card */
.motivational-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.motivational-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3498db, #e74c3c, #27ae60);
}

.motivation-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.motivation-text {
  font-size: 1.2rem;
  font-style: italic;
  color: #34495e;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.new-message-btn {
  background: #3498db;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
}

.new-message-btn:hover {
  background: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.stat-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.stat-icon {
  font-size: 2.5rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
}

.stat-content h3 {
  font-size: 2rem;
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
}

.stat-content p {
  margin: 0;
  color: #7f8c8d;
  font-weight: 500;
}

/* Milestones Section */
.milestones-section {
  margin-bottom: 3rem;
}

.milestones-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.milestone-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.milestone-card:hover {
  transform: translateY(-3px);
}

.milestone-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.milestone-header h4 {
  margin: 0;
  color: #2c3e50;
  font-size: 1.2rem;
}

.milestone-progress {
  font-size: 1.1rem;
  font-weight: bold;
  color: #27ae60;
}

.milestone-description {
  color: #34495e;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #ecf0f1;
  border-radius: 4px;
  margin-bottom: 1rem;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #3498db, #27ae60);
  border-radius: 4px;
  transition: width 0.5s ease;
}

.milestone-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #7f8c8d;
}

.encouragement {
  color: #f39c12;
  font-weight: 500;
}

.milestone-reward {
  margin: 0;
  font-size: 0.9rem;
  color: #e74c3c;
  font-weight: 500;
}

/* Badges Section */
.badges-section {
  margin-bottom: 3rem;
}

.no-badges {
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.no-badges p {
  color: #7f8c8d;
  font-size: 1.1rem;
  margin: 0;
}

.badges-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.badge-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 4px solid;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease;
}

.badge-card:hover {
  transform: translateY(-3px);
}

.badge-icon {
  font-size: 2rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(52, 152, 219, 0.1);
  border-radius: 50%;
}

.badge-content h4 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
  font-size: 1.1rem;
}

.badge-content p {
  margin: 0 0 0.5rem 0;
  color: #34495e;
  font-size: 0.9rem;
}

.badge-content small {
  color: #7f8c8d;
  font-size: 0.8rem;
}

/* Favorite Pose Card */
.favorite-pose-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.favorite-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

.pose-icon {
  font-size: 3rem;
}

.favorite-content h4 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
  font-size: 1.3rem;
}

.favorite-content p {
  margin: 0;
  color: #7f8c8d;
}

/* Dashboard Actions */
.dashboard-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.share-btn,
.reset-btn {
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.share-btn {
  background: #3498db;
  color: white;
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
}

.share-btn:hover {
  background: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
}

.reset-btn {
  background: #e74c3c;
  color: white;
  box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
}

.reset-btn:hover {
  background: #c0392b;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(231, 76, 60, 0.4);
}

/* Responsive Design */
@media (max-width: 768px) {
  .appreciation-dashboard {
    padding: 3rem 1rem;
  }

  .appreciation-dashboard h2 {
    font-size: 2rem;
  }

  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }

  .stat-card {
    padding: 1.5rem;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .milestones-grid {
    grid-template-columns: 1fr;
  }

  .badges-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .badge-card {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }

  .favorite-content {
    flex-direction: column;
    gap: 1rem;
  }

  .dashboard-actions {
    flex-direction: column;
    align-items: center;
  }

  .share-btn,
  .reset-btn {
    width: 100%;
    max-width: 300px;
  }
}



# FILE: ./src/components/CountdownRing.css

.countdown-ring-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.countdown-ring {
  width: 120px;
  height: 120px;
}

.ring-bg {
  fill: none;
  stroke: #4a2c06;
  stroke-width: 8;
}

.ring-fill {
  fill: none;
  stroke-width: 8;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 60px 60px;
}

.ring-text {
  fill: #f5deb3;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Baloo Thambi 2', sans-serif;
}

.ring-pause-label {
  color: #e74c3c;
  font-size: 0.85rem;
  font-weight: 500;
  animation: pulseText 1.5s ease-in-out infinite;
}

@keyframes pulseText {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}



# FILE: ./src/components/UserTests.css

.user-tests-section {
  padding: 5rem 2rem;
  background: var(--light-bg);
  color: var(--text-color);
}

.user-tests-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--accent-color);
}

.user-tests-section > p {
  text-align: center;
  font-size: 1.1rem;
  color: var(--text-light);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.tests-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.test-category {
  background: #f3e0b5;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.test-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(179, 139, 89, 0.3);
}

.test-category h3 {
  margin: 0 0 1.5rem 0;
  color: var(--primary-color);
  font-size: 1.3rem;
  border-bottom: 2px solid var(--light-bg);
  padding-bottom: 0.5rem;
}

.test-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.test-item {
  background: var(--light-bg);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid var(--primary-color);
}

.test-item h4 {
  margin: 0 0 0.5rem 0;
  color: var(--text-color);
  font-size: 1.1rem;
}

.test-item p {
  margin: 0 0 1rem 0;
  color: var(--text-light);
  font-size: 0.9rem;
}

.latest-result {
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: var(--light-bg);
  border-radius: 4px;
}

.latest-result small {
  color: var(--text-color);
  font-weight: 500;
}

.result-date {
  color: var(--text-light);
  font-weight: normal;
}

.timer-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.timer-display {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--error-color);
  min-width: 60px;
}

.timer-controls button,
.yesno-buttons button,
input[type="number"] {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background: var(--primary-color);
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.timer-controls button:hover,
.yesno-buttons button:hover {
  background: var(--primary-hover);
}

input[type="number"] {
  background: white;
  color: var(--text-color);
  border: 1px solid var(--accent-color);
  width: 100%;
  max-width: 120px;
}

input[type="number"]:focus {
  outline: none;
  border-color: var(--warning-color);
  box-shadow: 0 0 5px rgba(212, 182, 118, 0.5);
}

.yesno-buttons {
  display: flex;
  gap: 0.5rem;
}

.results-section {
  background: #f3e0b5;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.results-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.results-header h3 {
  margin: 0;
  color: #2c3e50;
  font-size: 1.5rem;
}

.clear-all-btn {
  padding: 0.5rem 1rem;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s;
}

.clear-all-btn:hover {
  background: #c0392b;
}

.results-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.result-item {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #27ae60;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.result-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(179, 139, 89, 0.3);
}

.result-content {
  flex: 1;
}

.delete-result-btn {
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  transition: background-color 0.3s;
}

.delete-result-btn:hover {
  background: #c0392b;
}

.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.result-header strong {
  color: #2c3e50;
}

.category {
  background: #3498db;
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
}

.result-value {
  color: maroon;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.result-time {
  color: var(--text-light);
  font-size: 0.9rem;
}

.progress-bar {
  height: 8px;
  background: linear-gradient(to right, var(--secondary-color), var(--primary-color));
  border-radius: 4px;
  transition: width 1s ease;
}

.leaf-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, var(--success-color), var(--primary-color));
  color: white;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(139, 107, 48, 0.3);
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .tests-container {
    grid-template-columns: 1fr;
  }

  .user-tests-section h2 {
    font-size: 2rem;
  }

  .timer-controls {
    flex-direction: column;
    align-items: stretch;
  }

  .yesno-buttons {
    flex-direction: column;
  }
}



# FILE: ./src/components/IntroSection.css

.intro-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #f5deb3 0%, #d4b676 50%, #b38b59 100%);
  color: var(--text-color);
  padding: 2rem;
  position: relative;
  overflow: hidden;
  border-top: 5px solid var(--accent-color);
  border-bottom: 5px solid var(--accent-color);
}

.intro-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.3;
  pointer-events: none;
}

.intro-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.intro-content h1 {
  color: rgba(78, 59, 35, 0.5);
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  box-shadow: 0 0 20px rgba(179, 139, 89, 0.5);
}

.intro-subtitle {
  font-size: 1.3rem;
  margin-bottom: 3rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 600px;
}

.intro-highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.highlight-item {
  background: rgba(255, 255, 255, 0.15);
  padding: 2rem 1.5rem;
  border-radius: 16px;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.highlight-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.highlight-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.highlight-item h3 {
  color: rgba(78, 59, 35, 0.5);;
  margin: 0 0 0.75rem 0;
  font-size: 1.2rem;
  font-weight: 600;
}

.highlight-item p {
  margin: 0;
  opacity: 0.9;
  font-size: 0.95rem;
  line-height: 1.5;
}

.intro-cta {
  text-align: center;
  margin-top: 2rem;
}

.cta-text {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  opacity: 0.95;
}

.cta-button {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.8);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.cta-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

.intro-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.visual-wrapper {
  position: relative;
  max-width: 400px;
}

.intro-visual img {
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  transition: transform 0.3s ease;
}

.intro-visual img:hover {
  transform: scale(1.05);
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.floating-element {
  position: absolute;
  font-size: 2rem;
  animation: float 6s ease-in-out infinite;
  opacity: 0.7;
}

.floating-element:nth-child(1) {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.floating-element:nth-child(2) {
  top: 20%;
  right: 15%;
  animation-delay: 2s;
}

.floating-element:nth-child(3) {
  bottom: 15%;
  left: 20%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@media (max-width: 1024px) {
  .intro-container {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .intro-content h1 {
    font-size: 2.8rem;
  }

  .intro-highlights {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

@media (max-width: 768px) {
  .intro-section {
    padding: 1rem;
  }

  .intro-content h1 {
    font-size: 2.2rem;
  }

  .intro-subtitle {
    font-size: 1.1rem;
  }

  .intro-highlights {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .highlight-item {
    padding: 1.5rem 1rem;
  }

  .visual-wrapper {
    max-width: 300px;
  }

  .floating-element {
    font-size: 1.5rem;
  }
}



# FILE: ./src/components/Navigation.tsx

import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { gamification } from '../utils/gamification'
import './Navigation.css'

const navLinks = [
  { to: '/', label: 'Home', icon: '🏠' },
  { to: '/postures', label: 'Postures', icon: '🧘' },
  { to: '/practice', label: 'Practice', icon: '▶️' },
  { to: '/dashboard', label: 'Dashboard', icon: '📊' },
  { to: '/benefits', label: 'Benefits', icon: '🌿' },
  { to: '/tests', label: 'Self-Tests', icon: '📋' },
]

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const gstate = gamification.getState()

  return (
    <nav className="navigation">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          🧘 Project Evolving Yoga
        </NavLink>

        <div className="nav-level-pill">
          {gstate.levelName} — Lv.{gstate.level + 1}
        </div>

        <button
          className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                onClick={() => setMenuOpen(false)}
              >
                <span className="nav-link-icon">{link.icon}</span>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}



# FILE: ./src/components/Footer.css

.footer {
  background: #4a2c06;
  color: #f5deb3;
  padding: 3rem 2rem 1rem;
  position: relative;
  border-top: 5px solid var(--accent-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  margin: 0 0 1rem 0;
  color: #f5deb3;
}

.footer-section p {
  margin: 0 0 1rem 0;
  line-height: 1.6;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section ul li a {
  color: #f5deb3;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section ul li a:hover {
  color: var(--primary-color);
}

.footer-section:last-child {
  border-top: 2px solid gold;
  padding-top: 1rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-links a {
  font-size: 1.5rem;
  transition: transform 0.3s;
}

.social-links a:hover {
  transform: scale(1.2);
  filter: drop-shadow(0 0 6px var(--accent-color));
}

.footer-bottom {
  border-top: 1px solid #34495e;
  padding-top: 1rem;
  text-align: center;
  color: #95a5a6;
}

.footer-bottom p {
  margin: 0.5rem 0;
}

.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s, transform 0.3s;
  z-index: 1000;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}

.scroll-to-top.show {
  opacity: 1;
  visibility: visible;
}

.scroll-to-top:hover {
  transform: scale(1.1);
  background: var(--primary-hover);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }

  .scroll-to-top {
    bottom: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
}



# FILE: ./src/components/UserTests.tsx

import { useState, useEffect, useCallback } from 'react'
import { loadState, saveState } from '../utils/localStorage'
import './UserTests.css'

interface TestResult {
  name: string
  value: number | string
  category: string
  timestamp: string
}

const STORAGE_KEY = 'yoga.user.tests.v1'

export default function UserTests() {
  const [results, setResults] = useState<TestResult[]>(() => loadState(STORAGE_KEY) || [])
  const [timers, setTimers] = useState<Map<string, { startTime: number | null; interval: number | null }>>(new Map())
  const [runningTests, setRunningTests] = useState<Set<string>>(new Set())

  const tests = [
    {
      category: 'Breath & Lung Efficiency',
      tests: [
        { name: 'Breath-Holding Test', type: 'timer', unit: 'seconds' },
        { name: 'Controlled Breathing Test', type: 'yesno' }
      ]
    },
    {
      category: 'Balance & Coordination',
      tests: [
        { name: 'Single-Leg Stand', type: 'timer', unit: 'seconds' },
        { name: 'Closed-Eyes Balance Test', type: 'timer', unit: 'seconds' },
        { name: 'Dynamic Balance Test', type: 'count', unit: 'transitions' }
      ]
    },
    {
      category: 'Flexibility & Mobility',
      tests: [
        { name: 'Forward Bend Test', type: 'measurement', unit: 'cm' },
        { name: 'Side Stretch Test', type: 'measurement', unit: 'cm' },
        { name: 'Spinal Twist Test', type: 'scale', unit: '/10' },
        { name: 'Backbend Test', type: 'scale', unit: '/10' }
      ]
    },
    {
      category: 'Posture Endurance & Strength',
      tests: [
        { name: 'Plank Hold', type: 'timer', unit: 'seconds' },
        { name: 'Chair Pose Endurance', type: 'timer', unit: 'seconds' },
        { name: 'Warrior II Hold', type: 'timer', unit: 'seconds' },
        { name: 'Boat Pose Hold', type: 'timer', unit: 'seconds' }
      ]
    },
    {
      category: 'Relaxation & Mindfulness',
      tests: [
        { name: 'Savasana Duration', type: 'timer', unit: 'seconds' },
        { name: 'Guided Breathing Focus', type: 'scale', unit: '/10' }
      ]
    },
    {
      category: 'Yoga Flow & Endurance',
      tests: [
        { name: 'Sun Salutation Repetitions', type: 'count', unit: 'cycles' },
        { name: 'Yoga Flow Continuity', type: 'count', unit: 'poses' },
        { name: 'Recovery Test', type: 'scale', unit: '/10' }
      ]
    }
  ]

  useEffect(() => {
    saveState(STORAGE_KEY, results)
  }, [results])

  const startTimer = useCallback((testName: string) => {
    setRunningTests(prev => new Set(prev).add(testName))
    const interval = window.setInterval(() => {
      // Force re-render to update display
      setTimers(current => new Map(current))
    }, 100)
    setTimers(prev => {
      const newTimers = new Map(prev)
      newTimers.set(testName, { startTime: Date.now(), interval })
      return newTimers
    })
  }, [])

  const stopTimer = useCallback((testName: string) => {
    setRunningTests(prev => {
      const newSet = new Set(prev)
      newSet.delete(testName)
      return newSet
    })
    const timerData = timers.get(testName)
    if (timerData?.interval) {
      clearInterval(timerData.interval)
    }
    const elapsed = timerData?.startTime ? Math.floor((Date.now() - timerData.startTime) / 1000) : 0
    return elapsed
  }, [timers])

  const getElapsedTime = useCallback((testName: string) => {
    const timerData = timers.get(testName)
    if (!timerData?.startTime) return 0
    return Math.floor((Date.now() - timerData.startTime) / 1000)
  }, [timers])

  const saveResult = useCallback((testName: string, value: number | string, category: string) => {
    const newResult: TestResult = {
      name: testName,
      value,
      category,
      timestamp: new Date().toLocaleString()
    }
    setResults(prev => [newResult, ...prev])

    // Clean up timer for this test
    const timerData = timers.get(testName)
    if (timerData?.interval) {
      clearInterval(timerData.interval)
    }
    setTimers(prev => {
      const newTimers = new Map(prev)
      newTimers.delete(testName)
      return newTimers
    })
    setRunningTests(prev => {
      const newSet = new Set(prev)
      newSet.delete(testName)
      return newSet
    })
  }, [timers])

  const getLatestResult = useCallback((testName: string): TestResult | null => {
    return results.find(result => result.name === testName) || null
  }, [results])

  const deleteResult = useCallback((index: number) => {
    setResults(prev => prev.filter((_, i) => i !== index))
  }, [])

  const clearAllResults = useCallback(() => {
    if (window.confirm('Are you sure you want to delete all test results? This action cannot be undone.')) {
      setResults([])
    }
  }, [])

  const getPerformanceLevel = useCallback((testName: string, value: number | string): string => {
    if (typeof value === 'string') return 'Completed'

    switch (testName) {
      case 'Breath-Holding Test':
        if (value < 20) return 'Need effort'
        if (value < 40) return 'Keep practicing'
        if (value < 60) return 'Good job'
        return 'Excellent!'
      case 'Single-Leg Stand':
        if (value < 15) return 'Need effort'
        if (value < 30) return 'Keep practicing'
        if (value < 60) return 'Good job'
        return 'Excellent!'
      case 'Forward Bend Test':
        if (value > 20) return 'Need effort'
        if (value > 10) return 'Keep practicing'
        if (value > 0) return 'Good job'
        return 'Excellent!'
      default:
        return 'Completed'
    }
  }, [results])

  return (
    <section id="user-tests" className="user-tests-section">
      <h2>Yoga Self-Assessment Tests</h2>
      <p>Test your yoga capabilities and track your progress over time.</p>

      <div className="tests-container">
        {tests.map(category => (
          <div key={category.category} className="test-category">
            <h3>{category.category}</h3>
            <div className="test-list">
              {category.tests.map(test => {
                const latestResult = getLatestResult(test.name)
                return (
                  <div key={test.name} className="test-item">
                    <h4>{test.name}</h4>
                    <p>{test.unit}</p>
                    {latestResult && (
                      <div className="latest-result">
                        <small>
                          Latest: {latestResult.value} {typeof latestResult.value === 'number' ? getPerformanceLevel(test.name, latestResult.value) : ''}
                          <span className="result-date">({new Date(latestResult.timestamp).toLocaleDateString()})</span>
                        </small>
                      </div>
                    )}

                  {test.type === 'timer' && (
                    <div className="timer-controls">
                      <div className="timer-display">{runningTests.has(test.name) ? getElapsedTime(test.name) : 0}s</div>
                      <button
                        onClick={() => {
                          if (runningTests.has(test.name)) {
                            const time = stopTimer(test.name)
                            saveResult(test.name, time, category.category)
                          } else {
                            startTimer(test.name)
                          }
                        }}
                      >
                        {runningTests.has(test.name) ? 'Stop' : 'Start'}
                      </button>
                    </div>
                  )}

                  {test.type === 'count' && (
                    <input
                      type="number"
                      placeholder="Enter count"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          const value = parseInt((e.target as HTMLInputElement).value)
                          if (!isNaN(value)) {
                            saveResult(test.name, value, category.category)
                            ;(e.target as HTMLInputElement).value = ''
                          }
                        }
                      }}
                    />
                  )}

                  {test.type === 'measurement' && (
                    <input
                      type="number"
                      placeholder="Enter measurement"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          const value = parseFloat((e.target as HTMLInputElement).value)
                          if (!isNaN(value)) {
                            saveResult(test.name, value, category.category)
                            ;(e.target as HTMLInputElement).value = ''
                          }
                        }
                      }}
                    />
                  )}

                  {test.type === 'scale' && (
                    <input
                      type="number"
                      min="1"
                      max="10"
                      placeholder="1-10"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          const value = parseInt((e.target as HTMLInputElement).value)
                          if (value >= 1 && value <= 10) {
                            saveResult(test.name, value, category.category)
                            ;(e.target as HTMLInputElement).value = ''
                          }
                        }
                      }}
                    />
                  )}

                  {test.type === 'yesno' && (
                    <div className="yesno-buttons">
                      <button onClick={() => saveResult(test.name, 'Yes', category.category)}>Yes</button>
                      <button onClick={() => saveResult(test.name, 'No', category.category)}>No</button>
                    </div>
                  )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="results-section">
        <div className="results-header">
          <h3>Your Test Results</h3>
          {results.length > 0 && (
            <button className="clear-all-btn" onClick={clearAllResults}>
              Clear All Results
            </button>
          )}
        </div>
        {results.length === 0 ? (
          <p>No tests completed yet. Start testing above!</p>
        ) : (
          <div className="results-list">
            {results.map((result, index) => (
              <div key={index} className="result-item">
                <div className="result-content">
                  <div className="result-header">
                    <strong>{result.name}</strong>
                    <span className="category">{result.category}</span>
                  </div>
                  <div className="result-value">
                    {result.value} {typeof result.value === 'number' ? getPerformanceLevel(result.name, result.value) : ''}
                  </div>
                  <div className="result-time">{result.timestamp}</div>
                </div>
                <button
                  className="delete-result-btn"
                  onClick={() => deleteResult(index)}
                  title="Delete this result"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}



# FILE: ./src/components/YogaTrainer.css

.trainer-root {
  display: grid;
  gap: 16px;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  transition: all 0.3s ease;
}
.trainer-root:hover {
  box-shadow: 0 8px 24px rgba(43, 47, 74, 0.1);
  transform: translateY(-4px);
}
.mandala-wrap {
  display: flex;
  gap: 20px;
  align-items: center;
}
.mandala {
  --size: 140px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at 50% 40%, rgba(255,255,255,0.12), transparent 40%), conic-gradient(from 0deg, #ffb3c6, #ffe082, #b3e5fc, #c8e6c9, #ffb3c6);
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
  position: relative;
  transform: rotate(calc(var(--energy) * 0.36deg));
  transition: transform 800ms linear;
}
.mandala-core {
  background: rgba(255,255,255,0.9);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-weight: 700;
  transition: background-color 0.3s ease;
}
.mandala:hover .mandala-core {
  background-color: #ffe082;
}
.trainer-stats { font-size: 14px }
.controls { display:flex; gap:12px; align-items:center }
.timer { font-size: 18px; font-weight:600 }
.buttons button { margin-right:8px; transition: background-color 0.3s ease; }
.buttons button:hover {
  background-color: #2980b9;
  color: white;
}
.history ul { margin:0; padding-left: 18px }

.pose-library { margin-top: 18px }
.poses { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 18px }
.pose {
  box-sizing: border-box;
  border: 1px solid rgba(0,0,0,0.06);
  padding: 14px;
  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 240px; /* ensure enough room for image + text */
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.pose h4 { margin: 0 0 6px; font-size: 16px }
.pose:focus { outline: 3px solid rgba(43,47,74,0.08); outline-offset:4px }
.pose-head { display:flex; justify-content:space-between; align-items:center; gap:8px }
.pose-head .cat { color:#666; font-size:12px }
.pose .short { margin: 0 0 8px; font-size: 14px; color: #333 }
.pose .meta ul { margin: 6px 0 8px 18px }
.tag { display:inline-block; background:#f0f0f8; padding:4px 8px; margin-right:6px; border-radius:999px; font-size:12px }

.pose-controls { display:flex; gap:12px; align-items:center; margin-bottom:12px }
.pose-controls input { padding:8px 10px; border-radius:6px; border:1px solid #ddd }
.search-wrap { position:relative }
.search-wrap .clear { position:absolute; right:6px; top:6px; border:0; background:transparent; cursor:pointer }
.tabs button { margin-right:6px; padding:6px 10px; border-radius:6px; border:1px solid #ddd; background:transparent }
.tabs button.active { background:#2b2f4a; color:#fff }
.pose-body {
  display:flex;
  gap:12px;
  align-items:flex-start;
}
.pose-body img {
  border-radius:6px;
  object-fit:cover;
  background:#fafafa;
  width:160px;
  height:120px;
  flex: 0 0 auto;
  max-width: 40%;
  display:block;
  transition: transform 0.3s ease;
}
.pose-body img:hover {
  transform: scale(1.05);
}
.pose-info { display:flex; flex-direction:column; flex: 1 1 auto; min-width: 0 }
.pose-info ul { margin:6px 0 0 18px }

/* visual polish */
.pose:hover { box-shadow: 0 6px 20px rgba(43,47,74,0.12); transform: translateY(-4px); transition: transform 300ms ease, box-shadow 300ms ease }

/* small screens */
@media (max-width: 600px) {
  .poses { grid-template-columns: 1fr }
  .pose-body { flex-direction: column; align-items: center }
  .pose-body img { width: 260px; height: 160px }
  .pose-info { text-align: center }
}

/* Modal styles */
.modal { position: fixed; inset: 0; display: grid; place-items: center; background: rgba(0,0,0,0.45); z-index: 40 }
.modal-content { background: white; border-radius: 12px; padding: 18px; max-width: 900px; width: calc(100% - 40px); box-shadow: 0 20px 60px rgba(11,22,50,0.25) }
.modal-close { position: absolute; right: 18px; top: 18px; border: 0; background: transparent; font-size: 18px; cursor: pointer }
.modal-row { display:flex; gap:16px; align-items:flex-start }
.modal-row img { border-radius:8px; width:320px; height:240px; object-fit:cover }
.modal h2 { margin:0 0 6px }
.muted { color:#666; margin-top:0 }
.actions { margin-top:auto; display:flex; justify-content:flex-end }
.actions button { padding:8px 10px; border-radius:8px; border:0; background:#2b2f4a; color:#fff; cursor:pointer }
.actions button:focus { box-shadow: 0 0 0 3px rgba(43,47,74,0.12) }

/* ensure View details does not overflow card on narrow screens */
.pose .actions button { white-space:nowrap }



# FILE: ./src/components/BranchesSection.css

.branches-section {
  padding: 5rem 2rem;
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.branches-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.section-description {
  text-align: center;
  font-size: 1.1rem;
  color: #7f8c8d;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.branches-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.branch-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s;
}

.branch-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.branch-number {
  position: absolute;
  top: -10px;
  left: -10px;
  width: 40px;
  height: 40px;
  background: #3498db;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
}

.branch-card h3 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
  font-size: 1.3rem;
}

.branch-focus {
  color: #3498db;
  font-weight: bold;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.branch-description {
  margin: 0;
  color: #34495e;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .branches-grid {
    grid-template-columns: 1fr;
  }

  .branches-section h2 {
    font-size: 2rem;
  }
}



# FILE: ./src/components/BranchesSection.tsx

import './BranchesSection.css'

const branches = [
  {
    name: 'Hatha Yoga',
    focus: 'Physical Body',
    description: 'Emphasizes asanas (postures) and pranayama (breathing) to prepare the body and mind for meditation.'
  },
  {
    name: 'Raja Yoga',
    focus: 'Mind Control',
    description: 'Known as the "Royal Path," based on Patanjali\'s Ashtanga Yoga (Eight Limbs) — emphasizes meditation and discipline.'
  },
  {
    name: 'Karma Yoga',
    focus: 'Selfless Action',
    description: 'Path of service — doing one\'s duty without attachment to results.'
  },
  {
    name: 'Bhakti Yoga',
    focus: 'Devotion',
    description: 'Path of love and devotion toward the Divine through prayer, chanting, and surrender.'
  },
  {
    name: 'Jnana Yoga',
    focus: 'Knowledge',
    description: 'Path of wisdom — realizing the true Self through study and contemplation.'
  },
  {
    name: 'Kundalini Yoga',
    focus: 'Energy Awakening',
    description: 'Awakens spiritual energy (Kundalini) through postures, breath, and chanting.'
  }
]

export default function BranchesSection() {
  return (
    <section id="branches" className="branches-section">
      <div className="container">
        <h2>The Six Main Branches of Yoga</h2>
        <p className="section-description">
          Yoga is traditionally divided into six classical branches, each focusing on a different path to self-realization.
        </p>
        <div className="branches-grid">
          {branches.map((branch, index) => (
            <div key={branch.name} className="branch-card">
              <div className="branch-number">{index + 1}</div>
              <h3>{branch.name}</h3>
              <p className="branch-focus">{branch.focus}</p>
              <p className="branch-description">{branch.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



# FILE: ./src/components/TraditionalVersion.css

.traditional-version {
  font-family: Arial, sans-serif;
  color: #333;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.traditional-header {
  text-align: center;
  margin-bottom: 2rem;
}

.traditional-header h1 {
  font-size: 2rem;
  font-weight: bold;
}

.traditional-intro,
.traditional-branches,
.traditional-postures {
  margin-bottom: 2rem;
}

.traditional-branches ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}

.traditional-footer {
  text-align: center;
  font-size: 0.9rem;
  color: #666;
  margin-top: 3rem;
  border-top: 1px solid #ccc;
  padding-top: 1rem;
}



# FILE: ./src/components/Navigation.css

.navigation {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(74, 44, 6, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  z-index: 1000;
  border-bottom: 1px solid rgba(179, 139, 89, 0.15);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 1.5rem;
  height: 60px;
}

.nav-logo {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--secondary-color);
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.3s ease;
}
.nav-logo:hover {
  color: var(--primary-color);
}

.nav-level-pill {
  font-size: 0.72rem;
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
  background: rgba(179, 139, 89, 0.2);
  color: var(--primary-color);
  white-space: nowrap;
  font-weight: 600;
  margin-left: auto;
}

.nav-hamburger {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}
.nav-hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--secondary-color);
  border-radius: 2px;
  transition: all 0.3s ease;
}
.nav-hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(4px, 4px);
}
.nav-hamburger.open span:nth-child(2) {
  opacity: 0;
}
.nav-hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(4px, -4px);
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.25rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.75rem;
  border-radius: 6px;
  font-size: 0.88rem;
  color: rgba(245, 222, 179, 0.75);
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;
  font-family: inherit;
}
.nav-link:hover {
  color: var(--secondary-color);
  background: rgba(179, 139, 89, 0.1);
}
.nav-link.active {
  color: var(--secondary-color);
  background: rgba(179, 139, 89, 0.15);
  border-bottom: 2px solid var(--primary-color);
  border-radius: 6px 6px 0 0;
}
.nav-link-icon {
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .nav-hamburger {
    display: flex;
    margin-left: auto;
  }
  .nav-level-pill {
    display: none;
  }
  .nav-menu {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: rgba(74, 44, 6, 0.98);
    flex-direction: column;
    padding: 0.5rem;
    gap: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.35s ease;
    border-bottom: 1px solid rgba(179, 139, 89, 0.15);
  }
  .nav-menu.open {
    max-height: 400px;
  }
  .nav-link {
    padding: 0.7rem 1rem;
    border-radius: 6px;
  }
}



# FILE: ./src/components/Footer.tsx

import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Project Evolving Yoga</h3>
            <p>Offline, adaptive yoga trainer — privacy-first</p>
            <p>Enhance your physical and mental well-being through personalized yoga practice.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/postures">Postures</Link></li>
              <li><Link to="/practice">Practice</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/benefits">Benefits</Link></li>
              <li><Link to="/tests">Self-Tests</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: info@evolvingyoga.com</p>
            <p>Phone: +1 (555) 123-YOGA</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="YouTube">📺</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Project Evolving Yoga. All rights reserved.</p>
          <p>Built with ❤️ for wellness and mindfulness.</p>
        </div>
      </div>
    </footer>
  )
}



# FILE: ./src/components/UserJourney.css

.container.user-journey {
  max-width: 900px;
  margin: 20px auto;
  font-family: var(--font-family);
  color: var(--text-color);
  background: var(--light-bg);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.motivational-card {
  background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
  border-radius: 12px;
  padding: 20px 25px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0 4px 15px rgba(0, 122, 204, 0.1);
  animation: fadeInUp 0.6s ease-out;
  position: relative;
  overflow: hidden;
}

.motivational-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #007acc, #00aaff, #007acc);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.motivation-icon {
  font-size: 2rem;
}

.motivation-text {
  flex-grow: 1;
  font-size: 1.2rem;
  font-weight: 500;
}

.new-message-btn {
  background-color: #007acc;
  border: none;
  color: white;
  padding: 8px 14px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.new-message-btn:hover {
  background-color: #005fa3;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 15px;
  margin-bottom: 25px;
}

.stat-card {
  background-color: #e6f0ff;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 2px 5px rgb(0 0 0 / 0.1);
  position: relative;
}

.stat-icon {
  font-size: 1.8rem;
  margin-bottom: 8px;
}

.stat-content h3 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.stat-content p {
  margin: 0;
  font-size: 1rem;
  color: #555;
}

.info-icon {
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 1rem;
  color: #007acc;
  cursor: help;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.info-icon:hover {
  opacity: 1;
}

.milestones-section {
  margin-bottom: 25px;
}

.milestones-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 15px;
}

.milestone-card {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 1px 4px rgb(0 0 0 / 0.1);
}

.milestone-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
  position: relative;
}

.milestone-progress {
  font-weight: 700;
  font-size: 1.1rem;
}

.milestone-description {
  font-size: 0.95rem;
  margin-bottom: 8px;
  color: #444;
}

.progress-bar {
  background-color: #ddd;
  border-radius: 5px;
  height: 10px;
  overflow: hidden;
  margin-bottom: 8px;
}

.progress-fill {
  background-color: #007acc;
  height: 100%;
  transition: width 0.3s ease;
}

.milestone-details {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 6px;
}

.encouragement {
  font-style: italic;
  color: #007acc;
}

.milestone-reward {
  font-weight: 600;
  font-size: 0.9rem;
  color: #333;
}

.badges-section {
  margin-bottom: 25px;
}

.no-badges {
  font-style: italic;
  color: #777;
  text-align: center;
  padding: 15px;
  background-color: #f0f8ff;
  border-radius: 8px;
}

.badges-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.badge-card {
  background-color: #fff9e6;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 2px 5px rgb(0 0 0 / 0.1);
  border: 2px solid #ffd700;
}

.badge-icon {
  font-size: 2rem;
  margin-bottom: 8px;
}

.badge-card h4 {
  margin: 0 0 5px 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
}

.badge-card p {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}

.dashboard-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.share-btn,
.reset-btn {
  background-color: #007acc;
  border: none;
  color: white;
  padding: 10px 18px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
}

.share-btn:hover,
.reset-btn:hover {
  background-color: #005fa3;
}

.confirm-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.confirm-dialog {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.confirm-dialog h3 {
  margin-top: 0;
  color: #333;
}

.confirm-dialog p {
  margin-bottom: 20px;
  color: #666;
}

.confirm-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.confirm-yes,
.confirm-no {
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.confirm-yes {
  background-color: #007acc;
  color: white;
}

.confirm-yes:hover {
  background-color: #005fa3;
}

.confirm-yes.reset {
  background-color: #dc3545;
}

.confirm-yes.reset:hover {
  background-color: #c82333;
}

.confirm-no {
  background-color: #6c757d;
  color: white;
}

.confirm-no:hover {
  background-color: #5a6268;
}

.progress-chart-section {
  margin-bottom: 25px;
}

.progress-chart {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
}

.chart-segment {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 1rem;
  background: var(--light-bg);
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.chart-segment:hover {
  transform: translateY(-5px);
}

.segment-icon {
  font-size: 2rem;
}

.segment-label {
  font-weight: 600;
  color: var(--font-color);
  text-align: center;
}

.segment-fill {
  width: 100%;
  height: 20px;
  background: linear-gradient(to right, #f5deb3, #b38b59);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}

.segment-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: linear-gradient(90deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(255,255,255,0.3) 100%);
  width: 50%;
  animation: fillProgress 2s infinite;
}

@keyframes fillProgress {
  0% {
    left: -50%;
  }
  100% {
    left: 100%;
  }
}

.segment-value {
  font-weight: 600;
  color: var(--primary-color);
  text-align: center;
}



# FILE: ./src/components/UserJourney.tsx

import { useState, useEffect } from 'react';
import './UserJourney.css';
import { appreciationManager, appreciationUIUtils } from '../utils/appreciationUtils';

interface ProgressGoal {
  title: string;
  description: string;
  progressPercent: number;
  current: number;
  target: number;
  encouragement: string;
  reward: string;
}

interface DailyPractice {
  date: string; // ISO date string
  duration: number; // minutes practiced on that day
}

const LOCAL_STORAGE_KEY = 'yogaPracticeData';

export default function UserJourney() {
  const [totalSessions, setTotalSessions] = useState(0);
  const [totalPracticeTime, setTotalPracticeTime] = useState(0); // in minutes
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [progressGoals, setProgressGoals] = useState<ProgressGoal[]>([]);
  const [currentMotivationalMessage, setCurrentMotivationalMessage] = useState('');
  const [showShareConfirm, setShowShareConfirm] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [dailyPracticeData, setDailyPracticeData] = useState<DailyPractice[]>([]);

  // Load data from localStorage
  useEffect(() => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) {
      const parsedData: DailyPractice[] = JSON.parse(storedData);
      setDailyPracticeData(parsedData);
      updateStatsFromData(parsedData);
    } else {
      // Initialize with empty data or default
      setDailyPracticeData([]);
      updateStatsFromData([]);
    }
  }, []);

  // Update stats based on daily practice data
  const updateStatsFromData = (data: DailyPractice[]) => {
    const sessions = data.length;
    const totalTime = data.reduce((sum, day) => sum + day.duration, 0);

    // Calculate streaks
    let currentStreakCount = 0;
    let longestStreakCount = 0;
    let streakTemp = 0;
    let lastDate: Date | null = null;

    const sortedData = [...data].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    for (const day of sortedData) {
      const dayDate = new Date(day.date);
      if (lastDate) {
        const diffDays = (dayDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24);
        if (diffDays === 1) {
          streakTemp++;
        } else if (diffDays > 1) {
          if (streakTemp > longestStreakCount) longestStreakCount = streakTemp;
          streakTemp = 1;
        }
      } else {
        streakTemp = 1;
      }
      lastDate = dayDate;
    }
    if (streakTemp > longestStreakCount) longestStreakCount = streakTemp;

    // For current streak, check if last day is yesterday or today
    if (lastDate) {
      const today = new Date();
      const diffDays = (today.getTime() - lastDate.getTime()) / (1000 * 3600 * 24);
      if (diffDays <= 1) {
        currentStreakCount = streakTemp;
      } else {
        currentStreakCount = 0;
      }
    }

    setTotalSessions(sessions);
    setTotalPracticeTime(totalTime);
    setCurrentStreak(currentStreakCount);
    setLongestStreak(longestStreakCount);

    // Update progress goals based on totalTime or other metrics
    const milestones = appreciationManager.getProgressMilestones().map((m) => ({
      title: m.title,
      description: m.description,
      current: m.current,
      target: m.target,
      progressPercent: appreciationUIUtils.calculateProgress(m.current, m.target),
      encouragement: appreciationUIUtils.getEncouragementMessage(
        appreciationUIUtils.calculateProgress(m.current, m.target)
      ),
      reward: m.reward,
    }));
    setProgressGoals(milestones);
  };

  // Save daily practice data to localStorage
  const saveDailyPracticeData = (data: DailyPractice[]) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  };

  // Example function to add a practice session (for demo/testing)
  const addPracticeSession = (duration: number) => {
    const todayStr = new Date().toISOString().split('T')[0];
    let updatedData = [...dailyPracticeData];
    const existingIndex = updatedData.findIndex(d => d.date === todayStr);
    if (existingIndex >= 0) {
      updatedData[existingIndex].duration += duration;
    } else {
      updatedData.push({ date: todayStr, duration });
    }
    setDailyPracticeData(updatedData);
    saveDailyPracticeData(updatedData);
    updateStatsFromData(updatedData);
  };

  const handleNewMessage = () => {
    setCurrentMotivationalMessage(appreciationManager.generateMotivationalMessage());
  };

  const handleShareClick = () => {
    setShowShareConfirm(true);
  };

  const handleResetClick = () => {
    setShowResetConfirm(true);
  };

  const confirmShare = () => {
    alert('Achievements shared! (This is a placeholder)');
    setShowShareConfirm(false);
  };

  const confirmReset = () => {
    setDailyPracticeData([]);
    saveDailyPracticeData([]);
    setShowShareConfirm(false);
    setShowResetConfirm(false);
    updateStatsFromData([]);
  };

  const cancelShare = () => {
    setShowShareConfirm(false);
  };

  const cancelReset = () => {
    setShowResetConfirm(false);
  };

  return (
    <div className="container user-journey">
      <h2>Your Yoga Journey</h2>
      <div className="motivational-card">
        <div className="motivation-icon">💫</div>
        <p className="motivation-text">{currentMotivationalMessage}</p>
        <button className="new-message-btn" aria-label="Get new motivational message" onClick={handleNewMessage}>
          ✨ New Message
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <h3>{totalSessions}</h3>
            <p>Total Sessions</p>
          </div>
          <div className="info-icon" title="Total number of yoga sessions you've completed">ℹ️</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⏱️</div>
          <div className="stat-content">
            <h3>{totalPracticeTime}m</h3>
            <p>Total Practice Time</p>
          </div>
          <div className="info-icon" title="Total time spent practicing yoga in minutes">ℹ️</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🔥</div>
          <div className="stat-content">
            <h3>{currentStreak}</h3>
            <p>Current Streak</p>
          </div>
          <div className="info-icon" title="Number of consecutive days you've practiced yoga">ℹ️</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🏆</div>
          <div className="stat-content">
            <h3>{longestStreak}</h3>
            <p>Longest Streak</p>
          </div>
          <div className="info-icon" title="Your longest consecutive practice streak">ℹ️</div>
        </div>
      </div>

      <div className="milestones-section">
        <h3>Progress Goals</h3>
        <div className="milestones-grid">
          {progressGoals.map((goal, index) => (
            <div key={index} className="milestone-card">
              <div className="milestone-header">
                <h4>{goal.title}</h4>
                <span className="milestone-progress" style={{ color: goal.progressPercent >= 100 ? 'green' : 'inherit' }}>
                  {goal.progressPercent}%
                </span>
                <div className="info-icon" title={`Goal: ${goal.description}. Reward: ${goal.reward}`}>ℹ️</div>
              </div>
              <p className="milestone-description">{goal.description}</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${goal.progressPercent}%` }}></div>
              </div>
              <div className="milestone-details">
                <span>{goal.current} / {goal.target} minutes</span>
                <span className="encouragement">{goal.encouragement}</span>
              </div>
              <p className="milestone-reward">Reward: {goal.reward}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="badges-section">
        <h3>Your Achievements</h3>
        {progressGoals.filter(goal => goal.progressPercent >= 100).length > 0 ? (
          <div className="badges-grid">
            {progressGoals.filter(goal => goal.progressPercent >= 100).map((goal, index) => (
              <div key={index} className="badge-card">
                <div className="badge-icon">🏆</div>
                <h4>{goal.title}</h4>
                <p>{goal.reward}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-badges">
            <p>No badges earned yet. Keep practicing to unlock achievements! 🌱</p>
          </div>
        )}
      </div>

      <div className="progress-chart-section">
        <h3>Progress Overview</h3>
        <div className="progress-chart">
          {dailyPracticeData.length > 0 ? (
            dailyPracticeData.map((day) => (
              <div key={day.date} className="chart-bar">
                <div className="chart-label">{day.date}</div>
                <div className="chart-fill" style={{ width: `${Math.min(day.duration / 60 * 100, 100)}%` }}></div>
                <div className="chart-value">{day.duration}m</div>
              </div>
            ))
          ) : (
            <p>No practice data available.</p>
          )}
        </div>
      </div>

      <div className="dashboard-actions">
        <button className="share-btn" onClick={handleShareClick}>📤 Share Achievements</button>
        <button className="reset-btn" onClick={handleResetClick}>🔄 Reset Progress</button>
      </div>

      {showShareConfirm && (
        <div className="confirm-dialog-overlay">
          <div className="confirm-dialog">
            <h3>Share Achievements</h3>
            <p>Are you sure you want to share your yoga achievements?</p>
            <div className="confirm-buttons">
              <button className="confirm-yes" onClick={confirmShare}>Yes, Share</button>
              <button className="confirm-no" onClick={cancelShare}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {showResetConfirm && (
        <div className="confirm-dialog-overlay">
          <div className="confirm-dialog">
            <h3>Reset Progress</h3>
            <p>Are you sure you want to reset all your progress? This action cannot be undone.</p>
            <div className="confirm-buttons">
              <button className="confirm-yes reset" onClick={confirmReset}>Yes, Reset</button>
              <button className="confirm-no" onClick={cancelReset}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* For testing/demo: Add practice session button */}
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => addPracticeSession(15)}>Add 15 min Practice Session (Today)</button>
      </div>
    </div>
  );
}



# FILE: ./src/components/IntroSection.tsx

import './IntroSection.css'

export default function IntroSection() {
  const handleStartJourney = () => {
    const nextSection = document.getElementById('postures')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="intro" className="intro-section">
      <div className="intro-container">
        <div className="intro-content">
          <h1>Transform Your Practice with Evolving Yoga</h1>
          <p className="intro-subtitle">
            Embark on a personalized yoga journey that adapts to your body, mind, and spirit.
            Discover ancient wisdom meets modern technology for holistic wellness.
          </p>
          <div className="intro-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">🧘‍♀️</div>
              <h3>Adaptive Training</h3>
              <p>AI-powered routines that evolve with your progress and preferences</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🌅</div>
              <h3>Traditional Wisdom</h3>
              <p>Authentic sequences like Sun Salutation with modern accessibility</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🏠</div>
              <h3>Anywhere, Anytime</h3>
              <p>Practice in your space, on your schedule - no equipment required</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">📚</div>
              <h3>Comprehensive Library</h3>
              <p>Extensive pose database with benefits, steps, and modifications</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">📊</div>
              <h3>Progress Tracking</h3>
              <p>Monitor your journey with built-in assessment tools</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🔒</div>
              <h3>Privacy First</h3>
              <p>Offline functionality ensures your practice remains personal</p>
            </div>
          </div>
          <div className="intro-cta">
            <p className="cta-text">Ready to begin your yoga journey?</p>
            <button className="cta-button" onClick={handleStartJourney}>Start Your Yoga Journey</button>
          </div>
        </div>
        <div className="intro-visual">
          <div className="visual-wrapper">
            <img src="/postures/sooriya-namaskar.png" alt="Sun Salutation sequence illustration" />
            <div className="floating-elements">
              <div className="floating-element">✨</div>
              <div className="floating-element">🌿</div>
              <div className="floating-element">🕉️</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



# FILE: ./src/components/PostureCategories.css

.posture-categories-section {
  padding: 3rem 2rem;
  background: url('/postures/olaichuvadi.png') center/cover no-repeat;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: inset 0 0 20px rgba(0,0,0,0.1);
  position: relative;
}

.posture-categories-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(245, 222, 179, 0.8);
  border-radius: 12px;
  z-index: 1;
}

.posture-categories-section > * {
  position: relative;
  z-index: 2;
}

.posture-categories-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--accent-color);
  position: sticky;
  top: 0;
  background: var(--light-bg);
  padding: 1rem 0;
  border-bottom: 2px solid var(--accent-color);
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

.category-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  position: sticky;
  top: 100px;
  background: var(--light-bg);
  padding: 1rem 0;
  z-index: 10;
}

.category-buttons button {
  background: var(--light-bg);
  border: 2px solid var(--accent-color);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  color: var(--text-color);
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
  position: relative;
}

.category-buttons button::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--primary-color);
  transition: width 0.3s ease, left 0.3s ease;
}

.category-buttons button.active::after,
.category-buttons button:hover::after {
  width: 100%;
  left: 0;
}

.category-buttons button.active,
.category-buttons button:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

.posture-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.posture-card {
  background: var(--light-bg);
  border: 1px solid var(--accent-color);
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  transition: transform 0.6s ease, box-shadow 0.4s ease;
  cursor: pointer;
  overflow: hidden;
  perspective: 1000px;
  opacity: 0;
  transform: translateX(-50px);
  animation: slideInLeft 0.8s ease-out forwards;
}

.posture-card:nth-child(1) {
  animation-delay: 0s;
}

.posture-card:nth-child(2) {
  animation-delay: 0.2s;
}

.posture-card:nth-child(3) {
  animation: slideInRight 0.8s ease-out forwards;
  animation-delay: 0.4s;
  transform: translateX(50px);
}

.posture-card:nth-child(4) {
  animation: slideInRight 0.8s ease-out forwards;
  animation-delay: 0.6s;
  transform: translateX(50px);
}

.posture-card:hover {
  transform: rotateX(15deg) scale(1.02);
  box-shadow: 0 6px 20px rgba(0,0,0,0.25);
}

.posture-card.open {
  max-height: 500px;
  transition: max-height 1s ease-in-out;
}

.posture-card img {
  width: 100%;
  height: auto;
  border-radius: 4px 4px 0 0;
  margin-bottom: 1rem;
}

.posture-card h3 {
  margin: 0 0 0.5rem 0;
  color: var(--font-color);
  font-size: 1.2rem;
  padding: 0 1rem;
}

.posture-details {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  visibility: hidden;
  transition: opacity 0.3s ease, max-height 0.3s ease, visibility 0.3s ease;
  padding: 0 1rem 1rem;
}

.posture-card:hover .posture-details {
  opacity: 1;
  max-height: 1000px;
  visibility: visible;
}

.posture-details h4 {
  margin: 0.5rem 0 0.25rem 0;
  font-size: 1rem;
  color: var(--font-color);
}

.posture-details ul {
  list-style-type: disc;
  padding-left: 1.2rem;
  margin: 0 0 0.5rem 0;
  color: var(--text-color);
  font-size: 0.9rem;
}

.posture-details ol {
  list-style-type: decimal;
  padding-left: 1.2rem;
  margin: 0;
  color: var(--text-color);
  font-size: 0.9rem;
}

/* Responsive breakpoints */
@media (max-width: 1024px) {
  .posture-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .posture-grid {
    grid-template-columns: 1fr;
  }
}



# FILE: ./src/components/TraditionalVersion.tsx

import './TraditionalVersion.css'

export default function TraditionalVersion() {
  return (
    <div className="traditional-version">
      <header className="traditional-header">
        <h1>Project Evolving Yoga - Traditional Version</h1>
      </header>
      <main>
        <section className="traditional-intro">
          <h2>Introduction</h2>
          <p>This is a simplified, static version of the yoga website designed for broad compatibility and minimal dependencies.</p>
        </section>
        <section className="traditional-branches">
          <h2>Branches of Yoga</h2>
          <ul>
            <li>Hatha Yoga - Physical Body</li>
            <li>Raja Yoga - Mind Control</li>
            <li>Karma Yoga - Selfless Action</li>
            <li>Bhakti Yoga - Devotion</li>
            <li>Jnana Yoga - Knowledge</li>
            <li>Kundalini Yoga - Energy Awakening</li>
          </ul>
        </section>
        <section className="traditional-postures">
          <h2>Yoga Postures</h2>
          <p>Explore basic yoga postures with descriptions and benefits.</p>
          {/* Could add static images and text here */}
        </section>
        <footer className="traditional-footer">
          <p>Contact: info@evolvingyoga.com</p>
        </footer>
      </main>
    </div>
  )
}



# FILE: ./src/components/PostureCategories.tsx

import POSTURES from '../data/postures.json'
import './PostureCategories.css'
import { useState } from 'react'

const updatedPostures = POSTURES.map(posture => ({
  ...posture,
  image: posture.image.replace('.svg', '.png')
}))

type Posture = {
  name: string
  image: string
  category: string
  benefits: string[]
  steps: string[]
}

export default function PostureCategories() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  // Get unique categories from updatedPostures
  const categoriesSet = new Set(updatedPostures.map((p: Posture) => p.category))
  const categories = Array.from(categoriesSet)
  categories.unshift('All')

  const filteredPostures = selectedCategory === 'All'
    ? updatedPostures
    : updatedPostures.filter((p) => p.category === selectedCategory)

  return (
    <section id="postures" className="posture-categories-section">
      <h2>Yoga Postures by Category</h2>
      <div className="category-buttons" role="tablist" aria-label="Yoga posture categories">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={cat === selectedCategory}
            className={cat === selectedCategory ? 'active' : ''}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="posture-grid">
        {filteredPostures.map((p) => (
          <article key={p.name} className="posture-card" tabIndex={0}>
            <img src={`/${p.image}`} alt={p.name} loading="lazy" />
            <h3>{p.name}</h3>
            <div className="posture-details">
              <h4>Benefits:</h4>
              <ul>
                {p.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <h4>Steps:</h4>
              <ol>
                {p.steps.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ol>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}



# FILE: ./src/store/sessionStore.ts

import type { PoseData } from '../types/yoga'

export interface SessionConfig {
  poses: PoseData[]
  holdSeconds: number
  preset?: string
}

export interface SessionResultData {
  completedPoses: number
  totalXP: number
  avgMatchScore: number
  bestCombo: number
  durationSeconds: number
  badgesUnlocked: string[]
}

let _config: SessionConfig | null = null
let _result: SessionResultData | null = null

function loadFromStorage(): void {
  try {
    const c = sessionStorage.getItem('yoga.session.config')
    const r = sessionStorage.getItem('yoga.session.result')
    if (c) _config = JSON.parse(c)
    if (r) _result = JSON.parse(r)
  } catch {
    // ignore
  }
}

function saveConfig(): void {
  try {
    if (_config) {
      sessionStorage.setItem('yoga.session.config', JSON.stringify(_config))
    } else {
      sessionStorage.removeItem('yoga.session.config')
    }
  } catch {
    // ignore
  }
}

function saveResult(): void {
  try {
    if (_result) {
      sessionStorage.setItem('yoga.session.result', JSON.stringify(_result))
    } else {
      sessionStorage.removeItem('yoga.session.result')
    }
  } catch {
    // ignore
  }
}

loadFromStorage()

export const sessionStore = {
  setConfig(config: SessionConfig): void {
    _config = config
    _result = null
    saveConfig()
    sessionStorage.removeItem('yoga.session.result')
  },

  getConfig(): SessionConfig | null {
    return _config ? { ..._config, poses: _config.poses.map(p => ({ ...p })) } : null
  },

  setResult(result: SessionResultData): void {
    _result = result
    saveResult()
  },

  getResult(): SessionResultData | null {
    return _result ? { ..._result } : null
  },

  clear(): void {
    _config = null
    _result = null
    try {
      sessionStorage.removeItem('yoga.session.config')
      sessionStorage.removeItem('yoga.session.result')
    } catch {
      // ignore
    }
  },
}



# FILE: ./src/store/routineStore.ts

import type { PoseData } from '../types/yoga'

const PENDING_KEY = 'yoga.pending.poses'

export function addPendingPose(pose: PoseData): void {
  try {
    const existing: PoseData[] = JSON.parse(localStorage.getItem(PENDING_KEY) || '[]')
    if (!existing.find(p => p.name === pose.name)) {
      existing.push(pose)
      localStorage.setItem(PENDING_KEY, JSON.stringify(existing))
    }
  } catch {
    // ignore
  }
}

export function removePendingPose(poseName: string): void {
  try {
    const existing: PoseData[] = JSON.parse(localStorage.getItem(PENDING_KEY) || '[]')
    const filtered = existing.filter(p => p.name !== poseName)
    localStorage.setItem(PENDING_KEY, JSON.stringify(filtered))
  } catch {
    // ignore
  }
}

export function getPendingPoses(): PoseData[] {
  try {
    return JSON.parse(localStorage.getItem(PENDING_KEY) || '[]')
  } catch {
    return []
  }
}

export function clearPendingPoses(): void {
  try {
    localStorage.removeItem(PENDING_KEY)
  } catch {
    // ignore
  }
}



# FILE: ./src/types/yoga.ts

export interface PoseData {
  name: string
  image: string
  category: string
  benefits: string[]
  steps: string[]
  holdSeconds?: number
  bodyParts?: string[]
  tags?: string[]
}

export type SessionPhase = 'prepare' | 'hold' | 'complete' | 'summary'

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced'

export interface SessionResult {
  completedPoses: number
  totalXP: number
  avgMatchScore: number
  bestCombo: number
  durationSeconds: number
  badgesUnlocked: string[]
  posesAttempted: number
  poseScores: number[]
  categoriesPracticed: string[]
}

export interface FeedbackMessage {
  severity: 'success' | 'warn' | 'error'
  text: string
}

export const CATEGORY_DIFFICULTY: Record<string, DifficultyLevel> = {
  'Standing Poses':    'beginner',
  'Seated Poses':      'beginner',
  'Supine Poses':      'beginner',
  'Prone Poses':       'beginner',
  'Balancing Poses':   'intermediate',
  'Inversions':        'advanced',
  'Backbends':         'intermediate',
  'Twists':            'intermediate',
  'Restorative Poses': 'beginner',
}

export interface BodyPartMeta {
  id: string
  label: string
  icon: string
  color: string
}

export const BODY_PARTS: BodyPartMeta[] = [
  { id: 'arms',        label: 'Arms',         icon: '💪', color: '#b38b59' },
  { id: 'shoulders',   label: 'Shoulders',    icon: '🤸', color: '#9a7040' },
  { id: 'chest',       label: 'Chest',        icon: '🫀', color: '#c49a65' },
  { id: 'core',        label: 'Core',         icon: '⚡', color: '#b38b59' },
  { id: 'back',        label: 'Back',         icon: '🦴', color: '#a07840' },
  { id: 'hips',        label: 'Hips',         icon: '🌀', color: '#b38b59' },
  { id: 'legs',        label: 'Legs',         icon: '🦵', color: '#9a7040' },
  { id: 'hamstrings',  label: 'Hamstrings',   icon: '🔗', color: '#c49a65' },
  { id: 'glutes',      label: 'Glutes',       icon: '🍑', color: '#b38b59' },
  { id: 'ankles',      label: 'Ankles',       icon: '🦶', color: '#a07840' },
  { id: 'spine',       label: 'Spine',        icon: '🧬', color: '#b38b59' },
  { id: 'neck',        label: 'Neck',         icon: '🧣', color: '#9a7040' },
  { id: 'wrists',      label: 'Wrists',       icon: '⌚', color: '#c49a65' },
  { id: 'full-body',   label: 'Full Body',    icon: '🧘', color: '#654321' },
]

export const POSE_TAGS: { id: string; label: string }[] = [
  { id: 'standing',        label: 'Standing' },
  { id: 'seated',          label: 'Seated' },
  { id: 'supine',          label: 'Supine' },
  { id: 'prone',           label: 'Prone' },
  { id: 'inversion',       label: 'Inversion' },
  { id: 'balance',         label: 'Balance' },
  { id: 'twist',           label: 'Twist' },
  { id: 'forward-bend',    label: 'Forward Bend' },
  { id: 'backbend',        label: 'Backbend' },
  { id: 'strength',        label: 'Strength' },
  { id: 'flexibility',     label: 'Flexibility' },
  { id: 'restorative',     label: 'Restorative' },
  { id: 'hip-opener',      label: 'Hip Opener' },
  { id: 'shoulder-opener', label: 'Shoulder Opener' },
  { id: 'beginner',        label: 'Beginner' },
  { id: 'intermediate',    label: 'Intermediate' },
  { id: 'advanced',        label: 'Advanced' },
]



# FILE: ./src/types/mediapipe.d.ts

interface NormalizedLandmark {
  x: number
  y: number
  z: number
  visibility?: number
}

declare const Pose: any
declare const Camera: any
declare const drawConnectors: any
declare const drawLandmarks: any
declare const POSE_CONNECTIONS: unknown[]



# FILE: ./src/utils/sensorUtils.ts

// Sensor utilities for device interaction in yoga training
// Handles motion detection, heart rate monitoring, and adaptive feedback

export interface SensorData {
  motion: {
    acceleration: { x: number; y: number; z: number };
    gyroscope: { x: number; y: number; z: number };
    timestamp: number;
  };
  heartRate?: number;
  timestamp: number;
}

export interface SessionMetrics {
  averageHeartRate: number;
  motionStability: number;
  sessionDuration: number;
  poseAccuracy: number;
}

class SensorManager {
  private motionSensor: ((event: DeviceMotionEvent) => void) | null = null;
  private isActive = false;
  private dataCallbacks: ((data: SensorData) => void)[] = [];
  private sessionStartTime = 0;
  private sessionData: SensorData[] = [];

  // Initialize sensor permissions and setup
  async initialize(): Promise<boolean> {
    try {
      // Request motion sensor permission
      if (typeof DeviceMotionEvent !== 'undefined' &&
          'requestPermission' in DeviceMotionEvent) {
        const permission = await (DeviceMotionEvent as any).requestPermission();
        if (permission !== 'granted') {
          console.warn('Motion sensor permission denied');
          return false;
        }
      }

      // Request heart rate sensor permission (if available)
      if ('bluetooth' in navigator && 'getDevices' in (navigator as any).bluetooth) {
        // Heart rate sensor setup would go here
        console.log('Heart rate sensor available');
      }

      return true;
    } catch (error) {
      console.error('Sensor initialization failed:', error);
      return false;
    }
  }

  // Start sensor data collection
  startSession(): void {
    if (this.isActive) return;

    this.isActive = true;
    this.sessionStartTime = Date.now();
    this.sessionData = [];

    // Setup motion sensor listener
    const handleMotion = (event: DeviceMotionEvent) => {
      const data: SensorData = {
        motion: {
          acceleration: {
            x: event.acceleration?.x || 0,
            y: event.acceleration?.y || 0,
            z: event.acceleration?.z || 0,
          },
          gyroscope: {
            x: event.rotationRate?.alpha || 0,
            y: event.rotationRate?.beta || 0,
            z: event.rotationRate?.gamma || 0,
          },
          timestamp: event.timeStamp || Date.now(),
        },
        timestamp: Date.now(),
      };

      this.sessionData.push(data);
      this.dataCallbacks.forEach(callback => callback(data));
    };

    window.addEventListener('devicemotion', handleMotion);
    this.motionSensor = handleMotion;

    console.log('Sensor session started');
  }

  // Stop sensor data collection
  stopSession(): SessionMetrics {
    if (!this.isActive) {
      return {
        averageHeartRate: 0,
        motionStability: 0,
        sessionDuration: 0,
        poseAccuracy: 0,
      };
    }

    this.isActive = false;

    if (this.motionSensor) {
      window.removeEventListener('devicemotion', this.motionSensor);
      this.motionSensor = null;
    }

    const sessionDuration = (Date.now() - this.sessionStartTime) / 1000; // in seconds

    // Calculate session metrics
    const metrics = this.calculateSessionMetrics();

    console.log('Sensor session stopped', metrics);
    return { ...metrics, sessionDuration };
  }

  // Add callback for real-time sensor data
  onSensorData(callback: (data: SensorData) => void): void {
    this.dataCallbacks.push(callback);
  }

  // Remove sensor data callback
  removeSensorDataCallback(callback: (data: SensorData) => void): void {
    const index = this.dataCallbacks.indexOf(callback);
    if (index > -1) {
      this.dataCallbacks.splice(index, 1);
    }
  }

  // Calculate session metrics from collected data
  private calculateSessionMetrics(): Omit<SessionMetrics, 'sessionDuration'> {
    if (this.sessionData.length === 0) {
      return {
        averageHeartRate: 0,
        motionStability: 0,
        poseAccuracy: 0,
      };
    }

    // Calculate average heart rate (placeholder for now)
    const averageHeartRate = this.sessionData
      .filter(d => d.heartRate)
      .reduce((sum, d) => sum + (d.heartRate || 0), 0) / this.sessionData.length || 0;

    // Calculate motion stability (lower variance = more stable)
    const motionMagnitudes = this.sessionData.map(d =>
      Math.sqrt(
        d.motion.acceleration.x ** 2 +
        d.motion.acceleration.y ** 2 +
        d.motion.acceleration.z ** 2
      )
    );

    const avgMotion = motionMagnitudes.reduce((sum, mag) => sum + mag, 0) / motionMagnitudes.length;
    const motionVariance = motionMagnitudes.reduce((sum, mag) => sum + (mag - avgMotion) ** 2, 0) / motionMagnitudes.length;
    const motionStability = Math.max(0, 1 - motionVariance / 10); // Normalize to 0-1 scale

    // Calculate pose accuracy (simplified - based on motion consistency)
    const poseAccuracy = motionStability * 0.8 + (averageHeartRate > 0 ? 0.2 : 0); // Placeholder calculation

    return {
      averageHeartRate,
      motionStability,
      poseAccuracy,
    };
  }

  // Get current sensor status
  getStatus(): {
    isActive: boolean;
    hasMotionSensor: boolean;
    hasHeartRateSensor: boolean;
    sessionDuration: number;
  } {
    return {
      isActive: this.isActive,
      hasMotionSensor: typeof DeviceMotionEvent !== 'undefined',
      hasHeartRateSensor: false, // Placeholder - would check for actual heart rate sensor
      sessionDuration: this.isActive ? (Date.now() - this.sessionStartTime) / 1000 : 0,
    };
  }
}

// Export singleton instance
export const sensorManager = new SensorManager();

// Utility functions for pose detection and feedback
export const poseDetectionUtils = {
  // Calculate pose stability from motion data
  calculatePoseStability(sensorData: SensorData[]): number {
    if (sensorData.length < 10) return 0;

    const recentData = sensorData.slice(-10);
    const motionMagnitudes = recentData.map(d =>
      Math.sqrt(
        d.motion.acceleration.x ** 2 +
        d.motion.acceleration.y ** 2 +
        d.motion.acceleration.z ** 2
      )
    );

    const avgMotion = motionMagnitudes.reduce((sum, mag) => sum + mag, 0) / motionMagnitudes.length;
    const variance = motionMagnitudes.reduce((sum, mag) => sum + (mag - avgMotion) ** 2, 0) / motionMagnitudes.length;

    return Math.max(0, Math.min(1, 1 - variance / 5)); // Normalize to 0-1 scale
  },

  // Generate adaptive feedback based on sensor data
  generateFeedback(metrics: SessionMetrics): string {
    let feedback = '';

    if (metrics.motionStability > 0.8) {
      feedback += 'Excellent stability! Your pose is very steady. ';
    } else if (metrics.motionStability > 0.6) {
      feedback += 'Good stability. Try to hold your balance a bit more. ';
    } else {
      feedback += 'Focus on improving your balance and stability. ';
    }

    if (metrics.averageHeartRate > 0) {
      if (metrics.averageHeartRate < 60) {
        feedback += 'Your heart rate is calm - perfect for relaxation poses. ';
      } else if (metrics.averageHeartRate < 80) {
        feedback += 'Your heart rate indicates moderate intensity. ';
      } else {
        feedback += 'Your heart rate is elevated - consider easier poses or longer rests. ';
      }
    }

    return feedback.trim();
  },

  // Suggest pose adjustments based on sensor data
  suggestAdjustments(sensorData: SensorData[]): string[] {
    const suggestions: string[] = [];
    const recentData = sensorData.slice(-5);

    if (recentData.length < 5) return suggestions;

    const avgAccel = recentData.reduce((sum, d) => ({
      x: sum.x + d.motion.acceleration.x,
      y: sum.y + d.motion.acceleration.y,
      z: sum.z + d.motion.acceleration.z,
    }), { x: 0, y: 0, z: 0 });

    avgAccel.x /= recentData.length;
    avgAccel.y /= recentData.length;
    avgAccel.z /= recentData.length;

    // Simple suggestions based on acceleration patterns
    if (Math.abs(avgAccel.x) > 2) {
      suggestions.push('Try to center your weight more evenly');
    }

    if (Math.abs(avgAccel.y) > 2) {
      suggestions.push('Focus on maintaining steady breathing');
    }

    if (Math.abs(avgAccel.z) > 2) {
      suggestions.push('Ground yourself more firmly');
    }

    return suggestions;
  },
};



# FILE: ./src/utils/feedbackEngine.ts

export interface FeedbackMessage {
  severity: 'success' | 'warn' | 'error'
  text: string
}

export function generateFeedback(
  landmarks: NormalizedLandmark[] | null,
  _poseName: string,
  matchScore: number
): FeedbackMessage {
  if (landmarks && landmarks.length > 0) {
    const leftShoulder = landmarks[11]
    const rightShoulder = landmarks[12]
    const leftHip = landmarks[23]
    const rightHip = landmarks[24]
    const leftWrist = landmarks[15]
    const rightWrist = landmarks[16]

    if (leftShoulder && rightShoulder) {
      const shoulderDiff = Math.abs(leftShoulder.y - rightShoulder.y)
      if (shoulderDiff > 0.08) {
        return { severity: 'warn', text: 'Level your shoulders' }
      }
    }

    if (leftWrist && rightWrist && leftHip && rightHip) {
      const avgHipY = (leftHip.y + rightHip.y) / 2
      const avgWristY = (leftWrist.y + rightWrist.y) / 2
      if (avgWristY > avgHipY) {
        return { severity: 'warn', text: 'Raise your arms higher' }
      }
    }

    if (leftHip && rightHip) {
      const hipCenterX = (leftHip.x + rightHip.x) / 2
      if (Math.abs(hipCenterX - 0.5) > 0.15) {
        return { severity: 'warn', text: 'Center your hips' }
      }
    }
  }

  if (matchScore > 88) {
    return { severity: 'success', text: 'Excellent form! Hold steady' }
  }
  if (matchScore > 70) {
    return { severity: 'success', text: 'Great! Refine your alignment' }
  }
  if (matchScore > 50) {
    return { severity: 'warn', text: 'Getting closer — check your stance' }
  }
  if (matchScore > 30) {
    return { severity: 'warn', text: 'Adjust your position — follow the reference' }
  }
  return { severity: 'error', text: 'Resume position — hold still' }
}



# FILE: ./src/utils/poseMatch.ts

const KEY_LANDMARK_INDICES = [0, 11, 12, 13, 14, 15, 16, 23, 24, 25]

let landmarkBuffer: NormalizedLandmark[][] = []

export function resetPoseBuffer(): void {
  landmarkBuffer = []
}

export function scorePose(detected: NormalizedLandmark[]): number {
  landmarkBuffer.push(detected.map(l => ({ ...l })))

  if (landmarkBuffer.length > 8) {
    landmarkBuffer.shift()
  }

  if (landmarkBuffer.length < 3) {
    return 50
  }

  const buffer = landmarkBuffer
  let totalDisplacement = 0
  let count = 0

  for (const idx of KEY_LANDMARK_INDICES) {
    if (idx >= buffer[0].length) continue
    for (let i = 1; i < buffer.length; i++) {
      const prev = buffer[i - 1][idx]
      const curr = buffer[i][idx]
      const dx = curr.x - prev.x
      const dy = curr.y - prev.y
      totalDisplacement += Math.sqrt(dx * dx + dy * dy)
      count++
    }
  }

  const avgDisplacement = count > 0 ? totalDisplacement / count : 1
  const stability = Math.max(0, 1 - avgDisplacement / 0.04)

  let totalVisibility = 0
  let visCount = 0
  const latest = buffer[buffer.length - 1]
  for (const idx of KEY_LANDMARK_INDICES) {
    if (idx < latest.length && latest[idx].visibility !== undefined) {
      totalVisibility += latest[idx].visibility!
      visCount++
    }
  }
  const avgVisibility = visCount > 0 ? totalVisibility / visCount : 0.5
  const visibilityBonus = avgVisibility < 0.4 ? avgVisibility / 0.4 : 1.0

  const score = Math.round((stability * 0.7 + visibilityBonus * 0.3) * 100)
  return Math.max(0, Math.min(100, score))
}



# FILE: ./src/utils/appreciationUtils.ts

import type { GamificationState } from './gamification'

export interface RecentSession {
  date: string
  durationMinutes: number
  energy: number
  xp: number
  categories: string[]
  posesCompleted: number
}

export interface UserStats {
  totalSessions: number
  totalPracticeTime: number
  currentStreak: number
  longestStreak: number
  favoritePose: string
  averageSessionLength: number
  badges: Badge[]
  lastPracticeDate: string
  weeklyGoal: number
  monthlyGoal: number
  recentSessions: RecentSession[]
  totalPosesCompleted: number
  categoriesPracticed: string[]
}

export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  earnedDate: string
  category: 'practice' | 'streak' | 'achievement' | 'pose' | 'test' | 'gamification'
}

export interface ProgressMilestone {
  id: string
  title: string
  description: string
  target: number
  current: number
  unit: string
  reward: string
}

interface BadgeCheckInput {
  id: string
  check: (stats: UserStats, gstate: GamificationState) => boolean
  name: string
  icon: string
  description: string
  category: Badge['category']
}

const BADGE_CHECKS: BadgeCheckInput[] = [
  { id: 'first_session',  check: (s) => s.totalSessions >= 1,        name: 'First Step',       icon: '🌱', description: 'Completed your first session',            category: 'practice' },
  { id: 'sessions_5',     check: (s) => s.totalSessions >= 5,        name: 'Regular Visitor',  icon: '📅', description: '5 sessions completed',                    category: 'practice' },
  { id: 'sessions_10',    check: (s) => s.totalSessions >= 10,       name: 'Steady Practice',  icon: '📿', description: '10 sessions completed',                   category: 'practice' },
  { id: 'sessions_50',    check: (s) => s.totalSessions >= 50,       name: 'Yoga Warrior',     icon: '⚔️', description: '50 sessions completed',                   category: 'practice' },
  { id: 'streak_3',       check: (s) => s.currentStreak >= 3,        name: 'Consistent Yogi',  icon: '🔥', description: '3-day practice streak',                   category: 'streak' },
  { id: 'streak_7',       check: (s) => s.currentStreak >= 7,        name: 'Devoted Seeker',   icon: '⚡', description: '7-day practice streak',                   category: 'streak' },
  { id: 'streak_30',      check: (s) => s.longestStreak >= 30,       name: 'Iron Will',        icon: '👑', description: '30-day practice streak',                  category: 'streak' },
  { id: 'xp_500',         check: (_, g) => g.totalXP >= 500,         name: 'Sapling',          icon: '🌿', description: 'Earned 500 XP',                           category: 'gamification' },
  { id: 'xp_2000',        check: (_, g) => g.totalXP >= 2000,        name: 'Banyan Tree',      icon: '🌳', description: 'Earned 2000 XP',                          category: 'gamification' },
  { id: 'xp_5000',        check: (_, g) => g.totalXP >= 5000,        name: 'Ancient Grove',    icon: '🏔️', description: 'Earned 5000 XP',                          category: 'gamification' },
  { id: 'perfect_hold',   check: (_, g) => g.perfectHolds >= 1,      name: 'Pure Form',        icon: '✨', description: 'Perfect hold on a pose',                  category: 'achievement' },
  { id: 'perfect_5',      check: (_, g) => g.perfectHolds >= 5,      name: 'Form Master',      icon: '💎', description: '5 perfect holds across sessions',         category: 'achievement' },
  { id: 'combo_3',        check: (_, g) => g.bestCombo >= 3,         name: 'On Fire',          icon: '🌶️', description: '3× pose combo',                           category: 'gamification' },
  { id: 'combo_5',        check: (_, g) => g.bestCombo >= 5,         name: 'Flow State',       icon: '🌊', description: '5× pose combo',                           category: 'gamification' },
  { id: 'morning_5',      check: (_, g) => g.morningSessions >= 5,   name: 'Dawn Warrior',     icon: '☀️', description: '5 morning sessions (before 8 AM)',          category: 'achievement' },
  { id: 'all_categories', check: (s) => s.categoriesPracticed.length >= 7, name: 'Explorer',  icon: '🗺️', description: 'Practiced all pose categories',           category: 'achievement' },
  { id: 'time_60min',     check: (s) => s.totalPracticeTime >= 60,   name: 'Hour Hero',        icon: '⏰', description: 'Total practice time: 1 hour',              category: 'achievement' },
  { id: 'time_600min',    check: (s) => s.totalPracticeTime >= 600,  name: 'Zen Master',       icon: '🧘', description: 'Total practice time: 10 hours',            category: 'achievement' },
  { id: 'poses_100',      check: (_, g) => g.totalPosesCompleted >= 100, name: 'Pose Collector', icon: '📖', description: 'Completed 100 poses across all sessions', category: 'pose' },
]

class AppreciationManager {
  private stats: UserStats
  private readonly STORAGE_KEY = 'yoga.appreciation.v1'

  constructor() {
    this.stats = this.loadStats()
  }

  private loadStats(): UserStats {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        if (!parsed.recentSessions) parsed.recentSessions = []
        if (!parsed.totalPosesCompleted) parsed.totalPosesCompleted = 0
        if (!parsed.categoriesPracticed) parsed.categoriesPracticed = []
        return parsed
      }
    } catch {
      // ignore
    }
    return this.defaultStats()
  }

  private defaultStats(): UserStats {
    return {
      totalSessions: 0,
      totalPracticeTime: 0,
      currentStreak: 0,
      longestStreak: 0,
      favoritePose: '',
      averageSessionLength: 0,
      badges: [],
      lastPracticeDate: '',
      weeklyGoal: 150,
      monthlyGoal: 600,
      recentSessions: [],
      totalPosesCompleted: 0,
      categoriesPracticed: [],
    }
  }

  private saveStats(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.stats))
    } catch {
      // ignore
    }
  }

  recordSessionFromResult(
    result: {
      durationSeconds: number
      avgMatchScore: number
      posesCompleted: number
      categoriesPracticed: string[]
      xpEarned: number
    },
    gstate: GamificationState
  ): string[] {
    const durationMinutes = Math.round(result.durationSeconds / 60)
    const today = new Date().toISOString().split('T')[0]
    const lastPractice = this.stats.lastPracticeDate

    this.stats.totalSessions++
    this.stats.totalPracticeTime += durationMinutes
    this.stats.averageSessionLength = this.stats.totalPracticeTime / this.stats.totalSessions

    if (lastPractice === today) {
      // same day, no streak change
    } else if (this.isConsecutiveDay(lastPractice, today)) {
      this.stats.currentStreak++
    } else {
      this.stats.currentStreak = 1
    }

    this.stats.longestStreak = Math.max(this.stats.longestStreak, this.stats.currentStreak)
    this.stats.lastPracticeDate = today

    if (result.posesCompleted > 0) {
      this.stats.totalPosesCompleted += result.posesCompleted
    }

    for (const cat of result.categoriesPracticed) {
      if (!this.stats.categoriesPracticed.includes(cat)) {
        this.stats.categoriesPracticed.push(cat)
      }
    }

    this.stats.recentSessions.push({
      date: new Date().toISOString(),
      durationMinutes,
      energy: result.avgMatchScore,
      xp: result.xpEarned,
      categories: [...result.categoriesPracticed],
      posesCompleted: result.posesCompleted,
    })
    if (this.stats.recentSessions.length > 60) {
      this.stats.recentSessions = this.stats.recentSessions.slice(-60)
    }

    const newBadges = this.checkForBadges(gstate)
    this.saveStats()
    return newBadges
  }

  private isConsecutiveDay(date1: string, date2: string): boolean {
    if (!date1) return false
    const d1 = new Date(date1)
    const d2 = new Date(date2)
    const diffTime = Math.abs(d2.getTime() - d1.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays === 1
  }

  private checkForBadges(gstate: GamificationState): string[] {
    const newIds: string[] = []
    for (const bc of BADGE_CHECKS) {
      if (this.hasBadge(bc.id)) continue
      if (bc.check(this.stats, gstate)) {
        this.stats.badges.push({
          id: bc.id,
          name: bc.name,
          description: bc.description,
          icon: bc.icon,
          earnedDate: new Date().toISOString(),
          category: bc.category,
        })
        newIds.push(bc.id)
      }
    }
    return newIds
  }

  private hasBadge(badgeId: string): boolean {
    return this.stats.badges.some(b => b.id === badgeId)
  }

  getStats(): UserStats {
    return { ...this.stats, recentSessions: [...this.stats.recentSessions], categoriesPracticed: [...this.stats.categoriesPracticed] }
  }

  getWeeklyActivityData(): { day: string; minutes: number }[] {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const result: { day: string; minutes: number }[] = []
    const now = new Date()

    for (let i = 6; i >= 0; i--) {
      const d = new Date(now)
      d.setDate(d.getDate() - i)
      const dateStr = d.toISOString().split('T')[0]
      const dayLabel = days[d.getDay()]

      const totalMin = this.stats.recentSessions
        .filter(s => s.date.startsWith(dateStr))
        .reduce((sum, s) => sum + s.durationMinutes, 0)

      result.push({ day: dayLabel, minutes: totalMin })
    }

    return result
  }

  getProgressMilestones(): ProgressMilestone[] {
    return [
      {
        id: 'weekly-goal',
        title: 'Weekly Goal',
        description: 'Practice time this week',
        target: this.stats.weeklyGoal,
        current: this.getWeeklyPracticeTime(),
        unit: 'minutes',
        reward: 'Weekly Warrior Badge',
      },
      {
        id: 'monthly-goal',
        title: 'Monthly Goal',
        description: 'Practice time this month',
        target: this.stats.monthlyGoal,
        current: this.getMonthlyPracticeTime(),
        unit: 'minutes',
        reward: 'Monthly Master Badge',
      },
      {
        id: 'streak-goal',
        title: 'Streak Goal',
        description: 'Current practice streak',
        target: 30,
        current: this.stats.currentStreak,
        unit: 'days',
        reward: 'Consistency Champion Badge',
      },
    ]
  }

  private getWeeklyPracticeTime(): number {
    const now = new Date()
    const weekStart = new Date(now)
    weekStart.setDate(now.getDate() - now.getDay())
    const startStr = weekStart.toISOString().split('T')[0]
    return this.stats.recentSessions
      .filter(s => s.date >= startStr)
      .reduce((sum, s) => sum + s.durationMinutes, 0)
  }

  private getMonthlyPracticeTime(): number {
    const now = new Date()
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1)
    const startStr = monthStart.toISOString().split('T')[0]
    return this.stats.recentSessions
      .filter(s => s.date >= startStr)
      .reduce((sum, s) => sum + s.durationMinutes, 0)
  }

  generateMotivationalMessage(): string {
    const messages = [
      "Every pose is a step toward inner peace. Keep flowing! 🌊",
      "Your dedication to yoga is inspiring. You're doing amazing! ✨",
      "Remember: yoga is not about perfection, it's about progress. 🌱",
      "Each breath brings you closer to harmony. Breathe on! 💨",
      "Your practice is a gift to yourself. Cherish it! 🎁",
      "Strength and flexibility grow with each session. Stay strong! 💪",
      "Mindfulness begins with awareness. You're cultivating it beautifully! 🧘",
    ]
    if (this.stats.currentStreak >= 7) {
      messages.push("Your consistency is remarkable! Keep the streak alive! 🔥")
    }
    if (this.stats.totalSessions >= 25) {
      messages.push("You're building a beautiful yoga journey. Proud of you! 🌟")
    }
    return messages[Math.floor(Math.random() * messages.length)]
  }

  getAchievementSummary(): string {
    return `I've completed ${this.stats.totalSessions} yoga sessions with a ${this.stats.currentStreak}-day streak! 🧘 #YogaJourney #ProjectEvolvingYoga`
  }

  resetStats(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY)
      localStorage.removeItem('yoga.gamification.v1')
    } catch {
      // ignore
    }
    this.stats = this.defaultStats()
    this.saveStats()
  }
}

export const appreciationManager = new AppreciationManager()

export const appreciationUIUtils = {
  formatDuration(minutes: number): string {
    if (minutes < 60) return `${Math.round(minutes)}m`
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = Math.round(minutes % 60)
    return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`
  },

  getBadgeColor(category: Badge['category']): string {
    const colors: Record<string, string> = {
      practice: '#b38b59',
      streak: '#9a7040',
      achievement: '#27ae60',
      pose: '#f39c12',
      test: '#4a90d9',
      gamification: '#9b59b6',
    }
    return colors[category] || '#95a5a6'
  },

  calculateProgress(current: number, target: number): number {
    return target > 0 ? Math.min((current / target) * 100, 100) : 0
  },

  getEncouragementMessage(progress: number): string {
    if (progress >= 100) return "Congratulations! Goal achieved! 🎉"
    if (progress >= 75) return "You're so close! Keep going! 🚀"
    if (progress >= 50) return "Halfway there! You're doing great! 💪"
    if (progress >= 25) return "Great start! Keep the momentum! 🌟"
    return "Every session counts! You've got this! 🌱"
  },
}



# FILE: ./src/utils/localStorage.ts

export function loadState(key: string) {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return null
    return JSON.parse(raw)
  } catch (e) {
    console.warn('failed to load state', e)
    return null
  }
}

export function saveState(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.warn('failed to save state', e)
  }
}



# FILE: ./src/utils/confetti.ts

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  shape: 'rect' | 'circle'
  life: number
  maxLife: number
}

const COLORS = ['#b38b59', '#f5deb3', '#654321', '#d4a96a', '#fff8e7', '#8b6b30']

export function launchConfetti(canvas: HTMLCanvasElement, duration = 3000): void {
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const W = canvas.width
  const H = canvas.height
  const particles: Particle[] = []
  const startTime = performance.now()

  for (let i = 0; i < 80; i++) {
    particles.push({
      x: W / 2 + (Math.random() - 0.5) * W * 0.6,
      y: H * 0.3,
      vx: (Math.random() - 0.5) * 8,
      vy: -8 - Math.random() * 6,
      size: Math.random() > 0.5 ? 4 + Math.random() * 6 : 5 + Math.random() * 5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      shape: Math.random() > 0.5 ? 'rect' : 'circle',
      life: 0,
      maxLife: duration,
    })
  }

  let animId: number
  const c = ctx

  function animate() {
    const elapsed = performance.now() - startTime
    if (elapsed > duration) {
      c.clearRect(0, 0, W, H)
      cancelAnimationFrame(animId)
      return
    }

    c.clearRect(0, 0, W, H)

    const fadeStart = duration - 600
    const alpha = elapsed > fadeStart ? Math.max(0, 1 - (elapsed - fadeStart) / 600) : 1

    for (const p of particles) {
      p.x += p.vx
      p.vy += 0.35
      p.y += p.vy
      p.vx += (Math.random() - 0.5) * 0.2

      c.save()
      c.globalAlpha = alpha
      c.fillStyle = p.color

      if (p.shape === 'rect') {
        c.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size * 0.4, p.size)
      } else {
        c.beginPath()
        c.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2)
        c.fill()
      }
      c.restore()
    }

    animId = requestAnimationFrame(animate)
  }

  animId = requestAnimationFrame(animate)
}



# FILE: ./src/utils/gamification.ts

const STORAGE_KEY = 'yoga.gamification.v1'

const LEVELS = [
  'Seed', 'Sprout', 'Sapling', 'Branch', 'Tree',
  'Banyan', 'Yogi', 'Sage', 'Guru', 'Enlightened',
]

export const XP_REWARDS = {
  poseComplete: 50,
  perfectHold: 100,
  combo3: 75,
  combo5: 150,
  firstSession: 200,
  allInCategory: 300,
}

export const COMBO_MULTIPLIERS = [1.0, 1.25, 1.5, 2.0, 3.0]

export interface GamificationState {
  totalXP: number
  level: number
  levelName: string
  combo: number
  comboMultiplier: number
  sessionXP: number
  perfectHolds: number
  bestCombo: number
  morningSessions: number
  categoriesPracticed: string[]
  totalPosesCompleted: number
}

function loadState(): GamificationState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (parsed.categoriesPracticed === undefined) parsed.categoriesPracticed = []
    if (parsed.morningSessions === undefined) parsed.morningSessions = 0
    if (parsed.totalPosesCompleted === undefined) parsed.totalPosesCompleted = 0
    return parsed
  } catch {
    return null
  }
}

function saveState(state: GamificationState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // localStorage unavailable
  }
}

function defaultState(): GamificationState {
  return {
    totalXP: 0,
    level: 0,
    levelName: LEVELS[0],
    combo: 0,
    comboMultiplier: 1.0,
    sessionXP: 0,
    perfectHolds: 0,
    bestCombo: 0,
    morningSessions: 0,
    categoriesPracticed: [],
    totalPosesCompleted: 0,
  }
}

function calcLevel(xp: number): { level: number; levelName: string } {
  const lvl = Math.min(9, Math.floor(xp / 500))
  return { level: lvl, levelName: LEVELS[lvl] }
}

class GamificationManager {
  private state: GamificationState

  constructor() {
    this.state = loadState() ?? defaultState()
  }

  awardXP(base: number, reason: string): { earned: number; toast: string } {
    const earned = Math.round(base * this.state.comboMultiplier)
    this.state.totalXP += earned
    this.state.sessionXP += earned
    const { level, levelName } = calcLevel(this.state.totalXP)
    this.state.level = level
    this.state.levelName = levelName
    this.save()
    return { earned, toast: `+${earned} XP — ${reason}` }
  }

  incrementCombo(): void {
    this.state.combo++
    const idx = Math.min(this.state.combo, COMBO_MULTIPLIERS.length - 1)
    this.state.comboMultiplier = COMBO_MULTIPLIERS[idx]
    if (this.state.combo > this.state.bestCombo) {
      this.state.bestCombo = this.state.combo
    }
    this.save()
  }

  breakCombo(): void {
    this.state.combo = 0
    this.state.comboMultiplier = 1.0
    this.save()
  }

  recordPerfectHold(): void {
    this.state.perfectHolds++
    this.save()
  }

  recordSession(result: {
    durationSeconds: number
    categoriesPracticed: string[]
    hour: number
    posesCompleted: number
  }): void {
    if (result.hour < 8) {
      this.state.morningSessions++
    }
    for (const cat of result.categoriesPracticed) {
      if (!this.state.categoriesPracticed.includes(cat)) {
        this.state.categoriesPracticed.push(cat)
      }
    }
    this.state.totalPosesCompleted += result.posesCompleted
    this.save()
  }

  resetSession(): void {
    this.state.sessionXP = 0
    this.state.combo = 0
    this.state.comboMultiplier = 1.0
    this.save()
  }

  getState(): GamificationState {
    return { ...this.state, categoriesPracticed: [...this.state.categoriesPracticed] }
  }

  getXPProgress(): { current: number; needed: number; pct: number } {
    const current = this.state.totalXP % 500
    const needed = 500
    const pct = needed > 0 ? (current / needed) * 100 : 0
    return { current, needed, pct: Math.min(100, pct) }
  }

  private save(): void {
    saveState(this.state)
  }
}

export const gamification = new GamificationManager()



# FILE: ./src/pages/PosturesPage.tsx

import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import POSTURES from '../data/postures.json'
import { CATEGORY_DIFFICULTY } from '../types/yoga'
import type { PoseData, DifficultyLevel } from '../types/yoga'
import { addPendingPose } from '../store/routineStore'
import './PosturesPage.css'

type SortMode = 'name' | 'category' | 'level'

const LEVELS: DifficultyLevel[] = ['beginner', 'intermediate', 'advanced']

function getDifficulty(pose: PoseData): DifficultyLevel {
  return CATEGORY_DIFFICULTY[pose.category] || 'beginner'
}

export default function PosturesPage() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [level, setLevel] = useState<DifficultyLevel | 'All'>('All')
  const [sort, setSort] = useState<SortMode>('name')
  const [selected, setSelected] = useState<PoseData | null>(null)

  const poses = POSTURES as PoseData[]

  const categories = useMemo(() => {
    const cats = new Set(poses.map(p => p.category))
    return ['All', ...cats]
  }, [poses])

  const filtered = useMemo(() => {
    let result = [...poses]

    if (category !== 'All') {
      result = result.filter(p => p.category === category)
    }
    if (level !== 'All') {
      result = result.filter(p => getDifficulty(p) === level)
    }
    if (search) {
      const s = search.toLowerCase()
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(s) ||
          p.benefits.some(b => b.toLowerCase().includes(s)) ||
          p.category.toLowerCase().includes(s)
      )
    }

    switch (sort) {
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'category':
        result.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name))
        break
      case 'level':
        result.sort((a, b) => {
          const lA = LEVELS.indexOf(getDifficulty(a))
          const lB = LEVELS.indexOf(getDifficulty(b))
          return lA - lB || a.name.localeCompare(b.name)
        })
        break
    }

    return result
  }, [poses, category, level, search, sort])

  const diffDots = (d: DifficultyLevel) => {
    const idx = LEVELS.indexOf(d) + 1
    return '●'.repeat(idx) + '○'.repeat(3 - idx)
  }

  return (
    <div className="page-wrapper postures-page">
      <div className="postures-header">
        <h1>Pose Library</h1>
        <div className="postures-controls">
          <input
            className="postures-search"
            type="search"
            placeholder="Search poses (name, benefit, category)..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Search poses"
          />
          <div className="postures-filters">
            <div className="filter-group">
              <label>Category</label>
              <select value={category} onChange={e => setCategory(e.target.value)}>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="filter-group">
              <label>Level</label>
              <select value={level} onChange={e => setLevel(e.target.value as DifficultyLevel | 'All')}>
                <option value="All">All Levels</option>
                {LEVELS.map(l => <option key={l} value={l}>{l.charAt(0).toUpperCase() + l.slice(1)}</option>)}
              </select>
            </div>
            <div className="filter-group">
              <label>Sort</label>
              <select value={sort} onChange={e => setSort(e.target.value as SortMode)}>
                <option value="name">A–Z</option>
                <option value="category">Category</option>
                <option value="level">Level</option>
              </select>
            </div>
          </div>
        </div>
        <p className="postures-count">{filtered.length} pose{filtered.length !== 1 ? 's' : ''}</p>
      </div>

      <div className="postures-grid">
        {filtered.map(p => {
          const diff = getDifficulty(p)
          return (
            <article
              key={p.name}
              className="pose-card"
              onClick={() => setSelected(p)}
            >
              <img
                src={`/${p.image}`}
                alt={p.name}
                className="pose-img"
                loading="lazy"
              />
              <span className="pose-category-tag">{p.category}</span>
              <h3 className="pose-card-name">{p.name}</h3>
              <span className="pose-difficulty">{diffDots(diff)}</span>
              <div className="pose-benefit-tags">
                {p.benefits.slice(0, 3).map(b => (
                  <span key={b} className="benefit-tag">{b.split(' ').slice(0, 3).join(' ')}</span>
                ))}
              </div>
              <div className="pose-card-actions">
                <button className="btn-add" onClick={(e) => {
                  e.stopPropagation()
                  addPendingPose(p)
                  navigate('/practice')
                }}>
                  + Add to Routine
                </button>
              </div>
            </article>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <div className="postures-empty">
          <p>No poses match your filters. Try adjusting your search criteria.</p>
        </div>
      )}

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-content pose-detail-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close">✕</button>
            <div className="pose-detail-layout">
              <img
                src={`/${selected.image}`}
                alt={selected.name}
                className="pose-img pose-detail-img"
              />
              <div className="pose-detail-info">
                <span className="pose-category-tag">{selected.category}</span>
                <h2>{selected.name}</h2>
                <span className="pose-difficulty">{diffDots(getDifficulty(selected))}</span>

                <h4>Benefits</h4>
                <ul className="benefits-list">
                  {selected.benefits.map(b => <li key={b}>{b}</li>)}
                </ul>

                <h4>Steps</h4>
                <ol className="steps-list">
                  {selected.steps.map((s, i) => <li key={i}>{s}</li>)}
                </ol>

                <div className="detail-actions">
                  <button className="btn-primary" onClick={() => {
                    addPendingPose(selected)
                    navigate('/practice')
                  }}>
                    + Add to Routine
                  </button>
                  <button className="btn-secondary" onClick={() => {
                    addPendingPose(selected)
                    navigate('/practice')
                  }}>
                    Start Solo Practice
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}



# FILE: ./src/pages/SessionPage.css

.session-page {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: #0d0905;
  display: flex;
  flex-direction: column;
  color: var(--secondary-color);
}

.session-topbar {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1.25rem;
  background: rgba(26,15,5,0.95);
  border-bottom: 1px solid rgba(179,139,89,0.15);
  font-size: 0.88rem;
}

.session-quit {
  background: none;
  border: 1px solid rgba(179,139,89,0.3);
  color: var(--secondary-color);
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.85rem;
  transition: border-color 0.3s ease;
}
.session-quit:hover {
  border-color: var(--primary-color);
}

.session-progress {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.session-progress-bar {
  flex: 1;
  max-width: 120px;
  height: 4px;
  background: rgba(255,255,255,0.1);
  border-radius: 2px;
  overflow: hidden;
}
.session-progress-bar span {
  display: block;
  height: 100%;
  background: var(--primary-color);
  transition: width 0.5s ease;
  border-radius: 2px;
}

.session-combo {
  color: #f39c12;
  font-weight: 700;
  font-size: 0.9rem;
}
.session-xp {
  color: var(--primary-color);
  font-weight: 600;
}

.session-body {
  flex: 1;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 1.5rem;
  padding: 1.25rem;
  overflow: hidden;
}

.session-reference {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}
.reference-img {
  width: 100%;
  max-width: 280px;
  border-radius: 10px;
}
.session-pose-name {
  color: var(--secondary-color);
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
}
.session-step-text {
  color: var(--text-light);
  font-size: 0.85rem;
  text-align: center;
  line-height: 1.4;
  padding: 0 0.5rem;
}

.session-webcam-area {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.webcam-video {
  width: 100%;
  max-width: 640px;
  border-radius: 10px;
  transform: scaleX(-1);
}

.webcam-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 640px;
  height: 100%;
  pointer-events: none;
  transform: scaleX(-1);
}

.webcam-fallback {
  width: 100%;
  max-width: 640px;
  min-height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(26,15,5,0.6);
  border: 2px dashed rgba(179,139,89,0.3);
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
}
.webcam-fallback p {
  color: var(--text-light);
  margin: 0.25rem 0;
}
.webcam-error-text {
  color: var(--error-color) !important;
  font-size: 0.82rem;
}

.prepare-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(13,9,5,0.7);
  border-radius: 10px;
}
.prepare-count {
  font-size: 5rem;
  font-weight: 700;
  color: var(--primary-color);
  animation: pulseScale 1s ease-in-out;
}
.prepare-label {
  font-size: 1.1rem;
  color: var(--secondary-color);
  margin-top: 0.5rem;
}

@keyframes pulseScale {
  0% { transform: scale(1.5); opacity: 0.3; }
  100% { transform: scale(1); opacity: 1; }
}

.session-match-score {
  color: var(--secondary-color);
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  width: 100%;
  max-width: 300px;
}
.match-bar {
  width: 100%;
  height: 6px;
  background: rgba(255,255,255,0.1);
  border-radius: 3px;
  overflow: hidden;
}
.match-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.3s ease;
}
.match-fill.high { background: #27ae60; }
.match-fill.mid { background: #f39c12; }
.match-fill.low { background: #e74c3c; }

.session-skip {
  min-height: 2rem;
}
.btn-skip {
  background: none;
  border: 1px solid rgba(179,139,89,0.3);
  color: var(--text-light);
  padding: 0.35rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.8rem;
  transition: border-color 0.3s ease;
}
.btn-skip:hover {
  border-color: var(--warning-color);
  color: var(--warning-color);
}

.complete-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  background: rgba(13,9,5,0.7);
  border-radius: 10px;
}
.complete-check {
  animation: checkDraw 0.5s ease-out;
}
@keyframes checkDraw {
  from { transform: scale(0); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.btn-next {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.7rem 1.75rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.3s ease;
}
.btn-next:hover {
  background: var(--primary-hover);
}

.session-feedback {
  padding: 0.7rem 1.5rem;
  text-align: center;
  font-size: 0.92rem;
  font-weight: 500;
  animation: feedbackSlideIn 0.3s ease;
}
.feedback-banner.success { background: rgba(39,174,96,0.15); color: #27ae60; border-top: 1px solid rgba(39,174,96,0.3); }
.feedback-banner.warn { background: rgba(243,156,18,0.15); color: #f39c12; border-top: 1px solid rgba(243,156,18,0.3); }
.feedback-banner.error { background: rgba(231,76,60,0.15); color: #e74c3c; border-top: 1px solid rgba(231,76,60,0.3); }

@keyframes feedbackSlideIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.session-manual-next {
  position: absolute;
  bottom: 1rem;
  right: 1.25rem;
}

/* Summary screen */
.session-page.summary-screen {
  display: flex;
  align-items: center;
  justify-content: center;
}

.confetti-canvas {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.summary-card {
  position: relative;
  z-index: 2;
  background: #1a0f05;
  border: 1px solid rgba(179,139,89,0.25);
  border-radius: 20px;
  padding: 3rem;
  max-width: 480px;
  width: 100%;
  text-align: center;
}

.summary-title {
  font-size: 2rem;
  color: var(--secondary-color);
  margin-bottom: 2rem;
}

.summary-stat {
  display: flex;
  justify-content: space-between;
  padding: 0.65rem 0;
  border-bottom: 1px solid rgba(179,139,89,0.1);
  font-size: 1rem;
}
.summary-stat-label {
  color: var(--text-light);
}
.summary-stat-value {
  color: var(--secondary-color);
  font-weight: 600;
}

.summary-level {
  margin: 1.5rem 0;
  font-size: 0.88rem;
  color: var(--primary-color);
}

.summary-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  margin-top: 1.5rem;
}
.summary-actions .btn-primary {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.3s ease;
}
.summary-actions .btn-primary:hover {
  background: var(--primary-hover);
}
.summary-actions .btn-secondary {
  background: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.3s ease;
}
.summary-actions .btn-secondary:hover {
  background: rgba(179,139,89,0.1);
}

@media (max-width: 768px) {
  .session-body {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    gap: 1rem;
  }
  .session-reference {
    flex-direction: row;
    gap: 0.75rem;
  }
  .reference-img {
    max-width: 120px;
  }
  .session-pose-name {
    font-size: 1rem;
  }
  .session-step-text {
    display: none;
  }
  .webcam-video, .webcam-canvas, .webcam-fallback {
    max-height: 50vh;
  }
}



# FILE: ./src/pages/PracticePage.tsx

import { useState, useMemo, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import POSTURES from '../data/postures.json'
import type { PoseData } from '../types/yoga'
import { sessionStore } from '../store/sessionStore'
import { getPendingPoses, clearPendingPoses, removePendingPose } from '../store/routineStore'
import './PracticePage.css'

const PRESET_ROUTINES: Record<string, string[]> = {
  'Morning Flow': [
    'Tadasana/Mountain Pose', 'Virabhadrasana I/Warrior I', 'Virabhadrasana II/Warrior II',
    'Uttanasana/Standing Forward Bend', 'Adho Mukha Svanasana/Downward-Facing Dog',
    "Balasana/Child's Pose",
  ],
  Relaxation: [
    "Balasana/Child's Pose", 'Supta Baddha Konasana/Reclining Bound Angle Pose',
    'Jathara Parivartanasana/Reclining Spinal Twist', 'Savasana/Corpse Pose',
  ],
  Strength: [
    'Utkatasana/Chair Pose', 'Virabhadrasana I/Warrior I', 'Virabhadrasana II/Warrior II',
    'Vasisthasana/Side Plank Pose', 'Chaturanga Dandasana/Four-Limbed Staff Pose',
  ],
  Balance: [
    'Vrksasana/Tree Pose', 'Garudasana/Eagle Pose', 'Ardha Chandrasana/Half Moon Pose',
    'Virabhadrasana III/Warrior III',
  ],
}

const CATEGORIES = ['All', ...new Set((POSTURES as PoseData[]).map(p => p.category))]

export default function PracticePage() {
  const navigate = useNavigate()
  const allPoses = POSTURES as PoseData[]
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [selectedPoses, setSelectedPoses] = useState<PoseData[]>([])
  const [holdSeconds, setHoldSeconds] = useState(30)
  const [dragIdx, setDragIdx] = useState<number | null>(null)

  useEffect(() => {
    const pending = getPendingPoses()
    if (pending.length > 0) {
      setSelectedPoses(pending)
      clearPendingPoses()
    }
  }, [])

  const filtered = useMemo(() => {
    let result = allPoses
    if (category !== 'All') {
      result = result.filter(p => p.category === category)
    }
    if (search) {
      const s = search.toLowerCase()
      result = result.filter(
        p => p.name.toLowerCase().includes(s) || p.benefits.some(b => b.toLowerCase().includes(s))
      )
    }
    return result
  }, [allPoses, category, search])

  const togglePose = useCallback((pose: PoseData) => {
    setSelectedPoses(prev =>
      prev.find(p => p.name === pose.name)
        ? prev.filter(p => p.name !== pose.name)
        : [...prev, pose]
    )
  }, [])

  const removePose = useCallback((name: string) => {
    setSelectedPoses(prev => prev.filter(p => p.name !== name))
    removePendingPose(name)
  }, [])

  const applyPreset = useCallback((name: string) => {
    const names = PRESET_ROUTINES[name]
    if (!names) return
    const matched = names.map(n => allPoses.find(p => p.name === n)).filter(Boolean) as PoseData[]
    setSelectedPoses(matched)
  }, [allPoses])

  const handleDragStart = useCallback((idx: number) => {
    setDragIdx(idx)
  }, [])

  const handleDrop = useCallback((idx: number) => {
    if (dragIdx === null || dragIdx === idx) return
    setSelectedPoses(prev => {
      const updated = [...prev]
      const [moved] = updated.splice(dragIdx, 1)
      updated.splice(idx, 0, moved)
      return updated
    })
    setDragIdx(null)
  }, [dragIdx])

  const startSession = useCallback(() => {
    sessionStore.setConfig({ poses: selectedPoses, holdSeconds })
    navigate('/session')
  }, [selectedPoses, holdSeconds, navigate])

  return (
    <div className="page-wrapper practice-page">
      <div className="practice-layout">
        <div className="practice-selector">
          <h1>Build Your Routine</h1>
          <input
            className="practice-search"
            type="search"
            placeholder="Search poses..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Search poses"
          />
          <div className="practice-categories">
            {CATEGORIES.map(c => (
              <button
                key={c}
                className={`practice-cat-btn ${category === c ? 'active' : ''}`}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="practice-pose-grid">
            {filtered.map(p => {
              const isSelected = selectedPoses.some(sp => sp.name === p.name)
              return (
                <div
                  key={p.name}
                  className={`practice-pose-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => togglePose(p)}
                >
                  <img src={`/${p.image}`} alt={p.name} className="pose-img" loading="lazy" />
                  <div className="practice-pose-info">
                    <span className="practice-pose-name">{p.name}</span>
                    <span className="practice-pose-cat">{p.category}</span>
                  </div>
                  <div className={`practice-checkbox ${isSelected ? 'checked' : ''}`}>
                    {isSelected ? '✓' : ''}
                  </div>
                </div>
              )
            })}
          </div>
          {filtered.length === 0 && (
            <p className="practice-empty">No poses match your search.</p>
          )}
        </div>

        <div className="practice-tray">
          <h2>Your Routine ({selectedPoses.length})</h2>

          <div className="preset-row">
            {Object.keys(PRESET_ROUTINES).map(name => (
              <button key={name} className="preset-btn" onClick={() => applyPreset(name)}>
                {name}
              </button>
            ))}
          </div>

          <div className="tray-list">
            {selectedPoses.length === 0 && (
              <p className="tray-empty">Select poses from the left panel to build your routine.</p>
            )}
            {selectedPoses.map((p, i) => (
              <div
                key={p.name}
                className={`tray-item ${dragIdx === i ? 'dragging' : ''}`}
                draggable
                onDragStart={() => handleDragStart(i)}
                onDragOver={e => e.preventDefault()}
                onDrop={() => handleDrop(i)}
              >
                <span className="tray-drag-handle">⠿</span>
                <span className="tray-pose-name">{p.name}</span>
                <button className="tray-remove" onClick={() => removePose(p.name)} aria-label={`Remove ${p.name}`}>
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="tray-settings">
            <label>
              Hold time:
              <select
                value={holdSeconds}
                onChange={e => setHoldSeconds(Number(e.target.value))}
              >
                <option value={15}>15s</option>
                <option value={30}>30s</option>
                <option value={45}>45s</option>
                <option value={60}>60s</option>
                <option value={90}>90s</option>
              </select>
            </label>
          </div>

          <div className="tray-actions">
            <button
              className="btn-primary btn-start"
              disabled={selectedPoses.length === 0}
              onClick={startSession}
            >
              {selectedPoses.length === 0
                ? 'Start Session'
                : `Start Session (${selectedPoses.length} pose${selectedPoses.length !== 1 ? 's' : ''})`
              }
            </button>
            <button
              className="btn-secondary btn-clear"
              onClick={() => setSelectedPoses([])}
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}



# FILE: ./src/pages/PosturesPage.css

.postures-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.postures-header {
  margin-bottom: 2rem;
}
.postures-header h1 {
  color: var(--accent-color);
  font-size: 2rem;
  margin-bottom: 1rem;
}

.postures-controls {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.postures-search {
  padding: 0.75rem 1rem;
  border: 2px solid rgba(101,67,33,0.2);
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  background: var(--light-bg);
  color: var(--text-color);
  width: 100%;
  max-width: 500px;
}
.postures-search:focus {
  outline: none;
  border-color: var(--primary-color);
}

.postures-filters {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.filter-group label {
  font-size: 0.8rem;
  color: var(--text-light);
  font-weight: 600;
}
.filter-group select {
  padding: 0.45rem 0.75rem;
  border: 1px solid rgba(101,67,33,0.2);
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: inherit;
  background: var(--light-bg);
  color: var(--text-color);
}

.postures-count {
  color: var(--text-light);
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.postures-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.pose-card {
  background: var(--light-bg);
  border: 1px solid rgba(101,67,33,0.12);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}
.pose-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(101,67,33,0.12);
}

.pose-card .pose-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.pose-category-tag {
  display: inline-block;
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background: var(--primary-color);
  color: white;
  margin: 0.75rem 0.75rem 0 0.75rem;
  align-self: flex-start;
}

.pose-card-name {
  font-size: 1.05rem;
  color: var(--accent-color);
  margin: 0.5rem 0.75rem;
  line-height: 1.2;
}

.pose-difficulty {
  font-size: 0.82rem;
  color: var(--text-light);
  margin: 0 0.75rem 0.5rem;
  letter-spacing: 2px;
}

.pose-benefit-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin: 0 0.75rem;
}
.benefit-tag {
  font-size: 0.72rem;
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
  background: rgba(179,139,89,0.12);
  color: var(--text-light);
}

.pose-card-actions {
  margin-top: auto;
  padding: 0.75rem;
}
.btn-add {
  width: 100%;
  padding: 0.55rem;
  border: 1px solid var(--primary-color);
  border-radius: 6px;
  background: transparent;
  color: var(--primary-color);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;
  font-family: inherit;
}
.btn-add:hover {
  background: var(--primary-color);
  color: white;
}

.postures-empty {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-light);
  font-size: 1.05rem;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}
.modal-content {
  background: white;
  border-radius: 14px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  padding: 2rem;
}
.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-light);
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
}
.modal-close:hover {
  background: rgba(0,0,0,0.05);
}

.pose-detail-layout {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 2rem;
}
.pose-detail-img {
  width: 100%;
  border-radius: 8px;
}

.pose-detail-info h2 {
  color: var(--accent-color);
  font-size: 1.6rem;
  margin: 0.5rem 0;
}
.pose-detail-info h4 {
  color: var(--accent-color);
  margin: 1rem 0 0.5rem;
  font-size: 1rem;
}

.benefits-list, .steps-list {
  padding-left: 1.25rem;
  margin: 0;
  font-size: 0.92rem;
  color: var(--text-light);
  line-height: 1.6;
}

.detail-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}
.detail-actions .btn-primary {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.7rem 1.25rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.92rem;
  transition: background 0.3s ease;
}
.detail-actions .btn-primary:hover {
  background: var(--primary-hover);
}
.detail-actions .btn-secondary {
  background: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  padding: 0.7rem 1.25rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.92rem;
  transition: background 0.3s ease;
}

@media (max-width: 1024px) {
  .postures-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .postures-grid { grid-template-columns: 1fr; }
  .pose-detail-layout { grid-template-columns: 1fr; }
  .pose-detail-img { max-height: 240px; }
}



# FILE: ./src/pages/SessionPage.tsx

import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import type { PoseData, SessionPhase } from '../types/yoga'
import { sessionStore } from '../store/sessionStore'
import { useWebcam } from '../hooks/useWebcam'
import { usePoseDetection } from '../hooks/usePoseDetection'
import { generateFeedback } from '../utils/feedbackEngine'
import { gamification } from '../utils/gamification'
import { launchConfetti } from '../utils/confetti'
import { showToast } from '../components/XPToast'
import CountdownRing from '../components/CountdownRing'
import { appreciationManager } from '../utils/appreciationUtils'
import './SessionPage.css'

export default function SessionPage() {
  const navigate = useNavigate()
  const config = sessionStore.getConfig()
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const confettiCanvasRef = useRef<HTMLCanvasElement>(null)
  const [phase, setPhase] = useState<SessionPhase>('prepare')
  const [poseIdx, setPoseIdx] = useState(0)
  const [prepareCount, setPrepareCount] = useState(3)
  const [holdRemaining, setHoldRemaining] = useState(0)
  const [sessionStartTime] = useState(Date.now())
  const [sessionXP, setSessionXP] = useState(0)
  const [combo, setCombo] = useState(0)
  const [completedPoses, setCompletedPoses] = useState(0)
  const [scores, setScores] = useState<number[]>([])
  const [showSkip, setShowSkip] = useState(false)

  const holdTotal = config?.holdSeconds ?? 30
  const poses = config?.poses ?? []
  const currentPose: PoseData | undefined = poses[poseIdx]

  const { isReady: webcamReady, error: webcamError } = useWebcam(videoRef)
  const { matchScore, landmarks } = usePoseDetection(
    videoRef,
    canvasRef,
    phase === 'hold' && !webcamError
  )

  const feedback = currentPose
    ? generateFeedback(landmarks, currentPose.name, matchScore)
    : null

  const redirectToPractice = useCallback(() => {
    navigate('/practice', { replace: true })
  }, [navigate])

  useEffect(() => {
    if (!config || poses.length === 0) {
      redirectToPractice()
    }
  }, [config, poses.length, redirectToPractice])

  // Prepare countdown
  useEffect(() => {
    if (phase !== 'prepare') return
    if (prepareCount <= 0) {
      setPhase('hold')
      setHoldRemaining(holdTotal)
      setShowSkip(false)
      return
    }
    const t = setTimeout(() => setPrepareCount(p => p - 1), 1000)
    return () => clearTimeout(t)
  }, [phase, prepareCount, holdTotal])

  // Hold countdown
  useEffect(() => {
    if (phase !== 'hold') return
    if (matchScore < 30) return // paused

    const t = setTimeout(() => {
      setHoldRemaining(prev => {
        if (prev <= 1) {
          handlePoseComplete()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearTimeout(t)
  }, [phase, holdRemaining, matchScore])

  // Skip button after holdTotal * 2
  useEffect(() => {
    if (phase !== 'hold') return
    const t = setTimeout(() => setShowSkip(true), holdTotal * 2 * 1000)
    return () => clearTimeout(t)
  }, [phase, holdTotal])

  const handlePoseComplete = useCallback(() => {
    const baseXP = 50
    const isPerfect = matchScore >= 88
    const earned = gamification.awardXP(baseXP, isPerfect ? 'Perfect Hold' : 'Pose Complete')
    setSessionXP(prev => prev + earned.earned)
    setScores(prev => [...prev, matchScore])
    setCompletedPoses(prev => prev + 1)
    showToast(earned.toast)

    if (isPerfect) {
      gamification.incrementCombo()
      gamification.recordPerfectHold()
      const state = gamification.getState()
      setCombo(state.combo)
    } else if (matchScore >= 80) {
      gamification.incrementCombo()
      const state = gamification.getState()
      setCombo(state.combo)
    } else {
      gamification.breakCombo()
      setCombo(0)
    }

    setPhase('complete')
  }, [matchScore])

  const handleNext = useCallback(() => {
    if (poseIdx + 1 < poses.length) {
      setPoseIdx(prev => prev + 1)
      setPhase('prepare')
      setPrepareCount(3)
      setShowSkip(false)
    } else {
      finishSession()
    }
  }, [poseIdx, poses.length])

  const handleSkip = useCallback(() => {
    gamification.breakCombo()
    setCombo(0)
    setScores(prev => [...prev, 0])
    setCompletedPoses(prev => prev + 1)
    handleNext()
  }, [handleNext])

  const finishSession = useCallback(() => {
    const duration = Math.round((Date.now() - sessionStartTime) / 1000)
    const state = gamification.getState()
    const avg = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0

    const result = {
      completedPoses,
      totalXP: state.sessionXP,
      avgMatchScore: avg,
      bestCombo: state.bestCombo,
      durationSeconds: duration,
      badgesUnlocked: [] as string[],
    }

    sessionStore.setResult(result)

    // Record session in appreciation manager
    appreciationManager.recordSession(duration / 60, currentPose?.name)

    setPhase('summary')

    // Launch confetti
    if (confettiCanvasRef.current) {
      confettiCanvasRef.current.width = window.innerWidth
      confettiCanvasRef.current.height = window.innerHeight
      launchConfetti(confettiCanvasRef.current)
    }

    gamification.resetSession()
  }, [sessionStartTime, scores, completedPoses, currentPose?.name])

  const handlePracticeAgain = useCallback(() => {
    sessionStore.clear()
    navigate('/practice')
  }, [navigate])

  const handleGoHome = useCallback(() => {
    sessionStore.clear()
    navigate('/')
  }, [navigate])

  if (!config || poses.length === 0) {
    return null
  }

  if (phase === 'summary') {
      const state = gamification.getState()
      const avg = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0
    const duration = Math.round((Date.now() - sessionStartTime) / 1000)
    const minutes = Math.floor(duration / 60)
    const seconds = duration % 60

    return (
      <div className="session-page summary-screen">
        <canvas ref={confettiCanvasRef} className="confetti-canvas" />
        <div className="summary-card">
          <h1 className="summary-title">Session Complete!</h1>

          <div className="summary-stat">
            <span className="summary-stat-label">Poses completed</span>
            <span className="summary-stat-value">{completedPoses}/{poses.length}</span>
          </div>
          <div className="summary-stat">
            <span className="summary-stat-label">Total XP earned</span>
            <span className="summary-stat-value">+{sessionXP}</span>
          </div>
          <div className="summary-stat">
            <span className="summary-stat-label">Best combo</span>
            <span className="summary-stat-value">×{state.bestCombo > 0 ? state.bestCombo.toFixed(1) : '1.0'}</span>
          </div>
          <div className="summary-stat">
            <span className="summary-stat-label">Avg match score</span>
            <span className="summary-stat-value">{avg}%</span>
          </div>
          <div className="summary-stat">
            <span className="summary-stat-label">Duration</span>
            <span className="summary-stat-value">{minutes}m {seconds}s</span>
          </div>

          <div className="summary-level">
            Level {state.level + 1}: {state.levelName} — {state.totalXP} total XP
          </div>

          <div className="summary-actions">
            <button className="btn-primary" onClick={handlePracticeAgain}>Practice Again</button>
            <button className="btn-secondary" onClick={handleGoHome}>Go Home</button>
          </div>
        </div>
      </div>
    )
  }

  if (!currentPose) return null

  return (
    <div className="session-page">
      <div className="session-topbar">
        <button className="session-quit" onClick={handleGoHome}>← Quit</button>
        <span className="session-progress">
          Pose {poseIdx + 1} of {poses.length}
          <span className="session-progress-bar">
            <span style={{ width: `${((poseIdx + (phase === 'complete' ? 1 : 0)) / poses.length) * 100}%` }} />
          </span>
        </span>
        {combo > 1 && <span className="session-combo">🔥 ×{combo}</span>}
        <span className="session-xp">XP: {sessionXP}</span>
      </div>

      <div className="session-body">
        <div className="session-reference">
          <img
            src={`/${currentPose.image}`}
            alt={currentPose.name}
            className="pose-img reference-img"
          />
          <h2 className="session-pose-name">{currentPose.name}</h2>
          {phase === 'hold' && (
            <p className="session-step-text">
              {currentPose.steps && currentPose.steps[0]
                ? currentPose.steps[0]
                : 'Follow the reference image'}
            </p>
          )}
        </div>

        <div className="session-webcam-area">
          {(webcamError || !webcamReady) && phase === 'hold' ? (
            <div className="webcam-fallback">
              <p>Webcam unavailable — practicing in timer mode</p>
              {webcamError && <p className="webcam-error-text">{webcamError}</p>}
            </div>
          ) : (
            <>
              <video ref={videoRef} className="webcam-video" playsInline muted />
              <canvas ref={canvasRef} className="webcam-canvas" />
            </>
          )}

          {phase === 'prepare' && (
            <div className="prepare-overlay">
              <span className="prepare-count">{prepareCount}</span>
              <p className="prepare-label">Get ready…</p>
            </div>
          )}

          {phase === 'hold' && (
            <>
              <div className="session-match-score">
                Match: {matchScore}%
                <div className="match-bar">
                  <div
                    className={`match-fill ${matchScore >= 85 ? 'high' : matchScore >= 65 ? 'mid' : 'low'}`}
                    style={{ width: `${Math.min(matchScore, 100)}%` }}
                  />
                </div>
              </div>
              <CountdownRing
                total={holdTotal}
                remaining={holdRemaining}
                matchScore={matchScore}
              />
              <div className="session-skip">
                {showSkip && (
                  <button className="btn-skip" onClick={handleSkip}>
                    Skip anyway?
                  </button>
                )}
              </div>
            </>
          )}

          {phase === 'complete' && (
            <div className="complete-overlay">
              <svg className="complete-check" viewBox="0 0 60 60" width="80" height="80">
                <circle cx="30" cy="30" r="26" fill="none" stroke="#27ae60" strokeWidth="4" />
                <path d="M18 30 L26 38 L42 22" fill="none" stroke="#27ae60" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <button className="btn-next" onClick={handleNext}>
                {poseIdx + 1 < poses.length ? 'Next →' : 'See Summary →'}
              </button>
            </div>
          )}
        </div>
      </div>

      {phase === 'hold' && feedback && (
        <div className={`session-feedback feedback-banner ${feedback.severity}`}>
          {feedback.text}
        </div>
      )}

      <div className="session-manual-next">
        {phase === 'hold' && (
          <button className="btn-next" onClick={handlePoseComplete}>
            Next →
          </button>
        )}
      </div>
    </div>
  )
}



# FILE: ./src/pages/HomePage.tsx

import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import BranchesSection from '../components/BranchesSection'
import './HomePage.css'

const QUOTES = [
  { text: 'Yoga is the journey of the self, through the self, to the self.', author: 'Bhagavad Gita' },
  { text: 'The pose begins when you want to leave it.', author: 'Baron Baptiste' },
  { text: 'Yoga is not about touching your toes, it is what you learn on the way down.', author: 'Jigar Gor' },
]

export default function HomePage() {
  const navigate = useNavigate()
  const [quoteIdx, setQuoteIdx] = useState(0)
  const [counts, setCounts] = useState({ postures: 0, branches: 0, potential: 0 })
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIdx(prev => (prev + 1) % QUOTES.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const el = statsRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const targets = { postures: 100, branches: 6, potential: 999 }
          const duration = 1500
          const start = performance.now()

          function animate(now: number) {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            setCounts({
              postures: Math.round(progress * targets.postures),
              branches: Math.round(progress * targets.branches),
              potential: progress >= 1 ? 999 : Math.round(progress * 999),
            })
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="page-wrapper home-page">
      <section className="hero-section">
        <div className="hero-bg-om">ॐ</div>
        <div className="hero-content">
          <h1 className="hero-title">Begin Your Journey</h1>
          <p className="hero-subtitle">Adaptive yoga, guided by tradition</p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={() => navigate('/practice')}>
              Start Practice →
            </button>
            <button className="btn-secondary" onClick={() => navigate('/postures')}>
              Explore Postures
            </button>
          </div>
        </div>
        <div className="scroll-chevron">⌄</div>
      </section>

      <section className="stats-banner" ref={statsRef}>
        <div className="stat-item">
          <span className="stat-number">{counts.postures}+</span>
          <span className="stat-label">Postures</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{counts.branches}</span>
          <span className="stat-label">Yoga Branches</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{counts.potential >= 999 ? '∞' : `${counts.potential}`}</span>
          <span className="stat-label">Your Potential</span>
        </div>
      </section>

      <section className="features-section">
        <div className="feature-card" onClick={() => navigate('/postures')}>
          <span className="feature-icon">🧘</span>
          <h3>Smart Postures</h3>
          <p>100+ poses with categories, steps, and benefits</p>
        </div>
        <div className="feature-card" onClick={() => navigate('/practice')}>
          <span className="feature-icon">📸</span>
          <h3>Webcam Tracking</h3>
          <p>Real-time pose matching using your camera</p>
        </div>
        <div className="feature-card" onClick={() => navigate('/dashboard')}>
          <span className="feature-icon">🏆</span>
          <h3>Gamification</h3>
          <p>XP, levels, badges, and streak tracking</p>
        </div>
      </section>

      <BranchesSection />

      <section className="quotes-section">
        <div className="quote-card" key={quoteIdx}>
          <p className="quote-text">"{QUOTES[quoteIdx].text}"</p>
          <p className="quote-author">— {QUOTES[quoteIdx].author}</p>
        </div>
        <div className="quote-dots">
          {QUOTES.map((_, i) => (
            <span key={i} className={`quote-dot ${i === quoteIdx ? 'active' : ''}`} onClick={() => setQuoteIdx(i)} />
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <h2>Ready to practice?</h2>
        <button className="btn-primary btn-large" onClick={() => navigate('/practice')}>
          Build Your Routine →
        </button>
      </section>
    </div>
  )
}



# FILE: ./src/pages/BenefitsPage.tsx

import { useState } from 'react'
import './BenefitsPage.css'

const LIMBS = [
  { sanskrit: 'Yama', english: 'Ethical Standards', desc: 'Moral disciplines — non-violence, truthfulness, non-stealing, celibacy, non-possessiveness.' },
  { sanskrit: 'Niyama', english: 'Self-Discipline', desc: 'Personal observances — purity, contentment, discipline, self-study, surrender.' },
  { sanskrit: 'Asana', english: 'Posture', desc: 'Physical postures to prepare the body for meditation.' },
  { sanskrit: 'Pranayama', english: 'Breath Control', desc: 'Regulation of breath to control the life force energy.' },
  { sanskrit: 'Pratyahara', english: 'Sense Withdrawal', desc: 'Turning inward, withdrawing from external stimuli.' },
  { sanskrit: 'Dharana', english: 'Concentration', desc: 'Focused attention on a single point.' },
  { sanskrit: 'Dhyana', english: 'Meditation', desc: 'Sustained, effortless concentration — a flow state.' },
  { sanskrit: 'Samadhi', english: 'Union', desc: 'Blissful absorption — the ultimate goal of yoga.' },
]

const BRANCHES = [
  { name: 'Hatha Yoga', suited: 'beginner', practices: 'Asanas, Pranayama, Mudras' },
  { name: 'Vinyasa Yoga', suited: 'intermediate', practices: 'Flow sequences, breath-synchronized movement' },
  { name: 'Ashtanga Yoga', suited: 'intermediate', practices: 'Fixed sequence of poses, Ujjayi breath' },
  { name: 'Iyengar Yoga', suited: 'beginner', practices: 'Alignment-focused, props, long holds' },
  { name: 'Kundalini Yoga', suited: 'intermediate', practices: 'Kriyas, mantra, meditation, breathwork' },
  { name: 'Yin Yoga', suited: 'beginner', practices: 'Long-held passive poses, deep tissue stretch' },
]

const PRANAYAMA = [
  { technique: 'Ujjayi', pattern: '5-count inhale, 5-count exhale through nose', effect: 'Calms nervous system, warms body', duration: '5–10 min' },
  { technique: 'Nadi Shodhana', pattern: 'Alternate nostril: inhale L, exhale R, inhale R, exhale L', effect: 'Balances hemispheres, reduces anxiety', duration: '5–10 min' },
  { technique: 'Kapalabhati', pattern: 'Short forceful exhales, passive inhales (1/sec)', effect: 'Energizes, cleanses lungs', duration: '1–3 min' },
  { technique: 'Bhastrika', pattern: 'Rapid full breaths (inhale + exhale, 1/sec)', effect: 'Increases oxygen, builds heat', duration: '1–3 min' },
  { technique: 'Bhramari', pattern: 'Inhale, exhale with humming bee sound', effect: 'Instantly calming, relieves stress', duration: '3–5 min' },
  { technique: 'Sitali', pattern: 'Inhale through curled tongue, exhale through nose', effect: 'Cools body and mind', duration: '3–5 min' },
  { technique: 'Dirga', pattern: '3-part breath: belly → ribs → chest', effect: 'Complete oxygenation, mindfulness', duration: '5–10 min' },
]

const physicalBenefits = [
  { icon: '💪', title: 'Strength', desc: 'Builds functional body strength through weight-bearing poses.' },
  { icon: '🧘', title: 'Flexibility', desc: 'Increases range of motion in joints and muscles.' },
  { icon: '❤️', title: 'Cardiovascular', desc: 'Gentle cardiac conditioning that improves circulation.' },
  { icon: '🦴', title: 'Posture', desc: 'Realigns spine and corrects imbalances from daily life.' },
  { icon: '🫁', title: 'Breathing', desc: 'Expands lung capacity and improves respiratory efficiency.' },
  { icon: '⚡', title: 'Energy', desc: 'Reduces fatigue and boosts vitality through pranayama.' },
]

const mentalBenefits = [
  { icon: '🧠', title: 'Clarity', desc: 'Sharpens focus and concentration through meditation.' },
  { icon: '😌', title: 'Stress Relief', desc: 'Activates the parasympathetic nervous system for deep rest.' },
  { icon: '🛌', title: 'Sleep Quality', desc: 'Improves sleep onset and depth with restorative practices.' },
]

export default function BenefitsPage() {
  const [openLimb, setOpenLimb] = useState<number | null>(null)

  return (
    <div className="page-wrapper benefits-page">
      <section className="benefits-hero">
        <h1>Why Yoga?</h1>
        <p className="benefits-hero-sub">
          Discover the transformative power of an ancient practice for modern well-being.
        </p>
      </section>

      <section className="benefits-section-inner">
        <h2>Physical Benefits</h2>
        <div className="benefits-grid-3">
          {physicalBenefits.map(b => (
            <div key={b.title} className="benefit-card">
              <span className="benefit-icon">{b.icon}</span>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="benefits-section-inner">
        <h2>Mental & Emotional Benefits</h2>
        <div className="benefits-grid-3">
          {mentalBenefits.map(b => (
            <div key={b.title} className="benefit-card">
              <span className="benefit-icon">{b.icon}</span>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="benefits-section-inner">
        <h2>The 8 Limbs of Yoga</h2>
        <div className="limbs-accordion">
          {LIMBS.map((limb, i) => (
            <div
              key={limb.sanskrit}
              className={`limb-card ${openLimb === i ? 'open' : ''}`}
              onClick={() => setOpenLimb(openLimb === i ? null : i)}
            >
              <div className="limb-header">
                <span className="limb-number">{(i + 1).toString().padStart(2, '0')}</span>
                <div>
                  <strong>{limb.sanskrit}</strong> — {limb.english}
                </div>
                <span className={`limb-chevron ${openLimb === i ? 'rotated' : ''}`}>▼</span>
              </div>
              {openLimb === i && (
                <div className="limb-body">
                  <p>{limb.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="benefits-section-inner">
        <h2>Branches of Yoga</h2>
        <div className="branches-grid">
          {BRANCHES.map(b => (
            <div key={b.name} className="branch-card">
              <h3>{b.name}</h3>
              <span className={`branch-level ${b.suited}`}>{b.suited}</span>
              <p><strong>Practices:</strong> {b.practices}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="benefits-section-inner">
        <h2>Pranayama Guide</h2>
        <div className="pranayama-table-wrapper">
          <table className="pranayama-table">
            <thead>
              <tr>
                <th>Technique</th>
                <th>Breath Pattern</th>
                <th>Effect</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {PRANAYAMA.map(p => (
                <tr key={p.technique}>
                  <td><strong>{p.technique}</strong></td>
                  <td>{p.pattern}</td>
                  <td>{p.effect}</td>
                  <td>{p.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="benefits-cta">
        <h2>Ready to experience these benefits?</h2>
        <a href="/practice" className="cta-button-large">Start Your Practice →</a>
      </section>
    </div>
  )
}



# FILE: ./src/pages/BenefitsPage.css

.benefits-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
}

.benefits-hero {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(160deg, rgba(74,44,6,0.08) 0%, transparent 100%);
  border-radius: 16px;
  margin-bottom: 3rem;
}
.benefits-hero h1 {
  font-size: 2.8rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}
.benefits-hero-sub {
  font-size: 1.15rem;
  color: var(--text-light);
  max-width: 600px;
  margin: 0 auto;
}

.benefits-section-inner {
  margin-bottom: 3rem;
}
.benefits-section-inner h2 {
  color: var(--accent-color);
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.benefits-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.benefit-card {
  background: var(--light-bg);
  border: 1px solid rgba(101,67,33,0.15);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.benefit-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(101,67,33,0.12);
}
.benefit-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.75rem;
}
.benefit-card h3 {
  color: var(--accent-color);
  margin-bottom: 0.5rem;
  font-size: 1.15rem;
}
.benefit-card p {
  color: var(--text-light);
  font-size: 0.92rem;
  margin: 0;
}

.limbs-accordion {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.limb-card {
  background: var(--light-bg);
  border: 1px solid rgba(101,67,33,0.15);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
}
.limb-card:hover {
  box-shadow: 0 4px 12px rgba(101,67,33,0.1);
}
.limb-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  color: var(--accent-color);
}
.limb-number {
  font-size: 0.85rem;
  color: var(--primary-color);
  font-weight: 700;
  min-width: 2rem;
}
.limb-chevron {
  margin-left: auto;
  transition: transform 0.3s ease;
  font-size: 0.8rem;
}
.limb-chevron.rotated {
  transform: rotate(180deg);
}
.limb-body {
  padding: 0 1.25rem 1rem 1.25rem;
  color: var(--text-light);
  font-size: 0.92rem;
  border-top: 1px solid rgba(101,67,33,0.1);
  padding-top: 0.75rem;
}
.limb-body p {
  margin: 0;
}

.branches-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.branch-card {
  background: var(--light-bg);
  border: 1px solid rgba(101,67,33,0.15);
  border-radius: 12px;
  padding: 1.5rem;
}
.branch-card h3 {
  color: var(--accent-color);
  margin-bottom: 0.5rem;
}
.branch-level {
  display: inline-block;
  font-size: 0.78rem;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  margin-bottom: 0.75rem;
  font-weight: 600;
}
.branch-level.beginner { background: rgba(39,174,96,0.15); color: #27ae60; }
.branch-level.intermediate { background: rgba(243,156,18,0.15); color: #f39c12; }
.branch-level.advanced { background: rgba(231,76,60,0.15); color: #e74c3c; }
.branch-card p {
  color: var(--text-light);
  font-size: 0.9rem;
  margin: 0;
}

.pranayama-table-wrapper {
  overflow-x: auto;
}
.pranayama-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.92rem;
}
.pranayama-table th {
  background: var(--dark-bg);
  color: var(--secondary-color);
  padding: 0.75rem 1rem;
  text-align: left;
  font-weight: 600;
}
.pranayama-table td {
  padding: 0.7rem 1rem;
  border-bottom: 1px solid rgba(101,67,33,0.1);
}
.pranayama-table tbody tr:nth-child(odd) td {
  background: var(--light-bg);
}
.pranayama-table tbody tr:nth-child(even) td {
  background: #fff8e7;
}

.benefits-cta {
  text-align: center;
  padding: 4rem 2rem;
  background: var(--dark-bg);
  border-radius: 16px;
  margin-top: 2rem;
}
.benefits-cta h2 {
  color: var(--secondary-color);
  margin-bottom: 1.5rem;
}
.cta-button-large {
  display: inline-block;
  background: var(--primary-color);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  font-size: 1.15rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.3s ease;
}
.cta-button-large:hover {
  background: var(--primary-hover);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .benefits-grid-3 { grid-template-columns: 1fr; }
  .branches-grid { grid-template-columns: 1fr; }
  .benefits-hero h1 { font-size: 2rem; }
  .pranayama-table { font-size: 0.82rem; }
}



# FILE: ./src/pages/DashboardPage.css

.dashboard-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.dashboard-hero {
  background: var(--dark-bg);
  border-radius: 14px;
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.level-pill {
  display: inline-block;
  background: var(--primary-color);
  color: white;
  padding: 0.4rem 1.25rem;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.xp-bar-wrapper {
  max-width: 400px;
  margin: 0 auto;
}
.xp-bar-label {
  font-size: 0.82rem;
  color: var(--secondary-color);
  margin-bottom: 0.4rem;
}
.xp-bar {
  height: 8px;
  background: rgba(255,255,255,0.1);
  border-radius: 4px;
  overflow: hidden;
}
.xp-bar-fill {
  height: 100%;
  background: var(--primary-color);
  border-radius: 4px;
  transition: width 0.5s ease;
}

.dashboard-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.dashboard-stat-card {
  background: var(--light-bg);
  border: 1px solid rgba(101,67,33,0.1);
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: transform 0.3s ease;
}
.dashboard-stat-card:hover {
  transform: translateY(-3px);
}
.dash-stat-icon {
  font-size: 2rem;
}
.dash-stat-value {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-color);
  line-height: 1.1;
}
.dash-stat-label {
  display: block;
  font-size: 0.78rem;
  color: var(--text-light);
  margin-top: 0.15rem;
}

.dashboard-section {
  margin-bottom: 2.5rem;
}
.dashboard-section h2 {
  color: var(--accent-color);
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.weekly-chart {
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  height: 140px;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(101,67,33,0.1);
}
.weekly-bar-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  height: 100%;
  justify-content: flex-end;
}
.weekly-bar {
  width: 100%;
  max-width: 40px;
  background: var(--primary-color);
  border-radius: 4px 4px 0 0;
  transition: height 0.5s ease;
  transform-origin: bottom;
  animation: barGrow 0.6s ease-out;
}
@keyframes barGrow {
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
}
.weekly-label {
  font-size: 0.72rem;
  color: var(--text-light);
}

.badge-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 0.75rem;
}
.badge-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.9rem 1rem;
  border-radius: 10px;
  border: 1px solid rgba(101,67,33,0.1);
  transition: transform 0.3s ease;
}
.badge-card.earned {
  background: var(--light-bg);
}
.badge-card.locked {
  background: rgba(101,67,33,0.04);
  opacity: 0.5;
}
.badge-card:hover {
  transform: translateY(-2px);
}
.badge-icon {
  font-size: 1.6rem;
  width: 40px;
  text-align: center;
}
.badge-info strong {
  display: block;
  font-size: 0.88rem;
  color: var(--accent-color);
}
.badge-info p {
  font-size: 0.75rem;
  color: var(--text-light);
  margin: 0.15rem 0 0;
}
.badge-info {
  min-width: 0;
}

.milestone-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.milestone-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: var(--light-bg);
  border-radius: 8px;
  border: 1px solid rgba(101,67,33,0.08);
}
.milestone-icon {
  font-size: 1.5rem;
}
.milestone-item strong {
  display: block;
  font-size: 0.9rem;
  color: var(--accent-color);
}
.milestone-item p {
  font-size: 0.8rem;
  color: var(--text-light);
  margin: 0.1rem 0;
}
.milestone-item small {
  font-size: 0.72rem;
  color: rgba(101,67,33,0.5);
}

.milestones-grid {
  display: grid;
  gap: 1rem;
}
.milestone-card {
  background: var(--light-bg);
  border: 1px solid rgba(101,67,33,0.1);
  border-radius: 10px;
  padding: 1.25rem;
}
.milestone-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.4rem;
}
.milestone-card-header h3 {
  font-size: 0.95rem;
  color: var(--accent-color);
  margin: 0;
}
.milestone-pct {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--primary-color);
}
.milestone-card p {
  font-size: 0.8rem;
  color: var(--text-light);
  margin-bottom: 0.75rem;
}
.milestone-bar {
  height: 6px;
  background: rgba(101,67,33,0.1);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}
.milestone-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--success-color));
  border-radius: 3px;
  transition: width 0.5s ease;
}
.milestone-count {
  font-size: 0.78rem;
  color: var(--text-light);
}

.motivational-section {
  text-align: center;
  padding: 2rem;
  background: var(--light-bg);
  border-radius: 12px;
}
.motivational-text {
  font-style: italic;
  font-size: 1.05rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
}
.btn-new-message {
  background: none;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  padding: 0.5rem 1.25rem;
  border-radius: 999px;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.88rem;
  transition: all 0.3s ease;
}
.btn-new-message:hover {
  background: var(--primary-color);
  color: white;
}

.dashboard-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  margin-top: 1rem;
}
.btn-share {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.3s ease;
}
.btn-share:hover {
  background: var(--primary-hover);
}
.btn-reset {
  background: transparent;
  color: var(--error-color);
  border: 1px solid var(--error-color);
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.3s ease;
}
.btn-reset:hover {
  background: rgba(139,69,19,0.1);
}

@media (max-width: 768px) {
  .dashboard-stats-grid { grid-template-columns: repeat(2, 1fr); }
  .badge-grid { grid-template-columns: 1fr; }
  .dashboard-actions { flex-direction: column; align-items: center; }
}



# FILE: ./src/pages/HomePage.css

.home-page {
  min-height: 100vh;
}

.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(160deg, rgba(26,15,5,0.85) 0%, rgba(74,44,6,0.6) 100%),
    url('/postures/olaichuvadi.png') center/cover no-repeat;
  overflow: hidden;
  text-align: center;
  padding: 2rem;
}

.hero-bg-om {
  position: absolute;
  font-size: 20rem;
  color: var(--secondary-color);
  opacity: 0.07;
  animation: omPulse 4s ease-in-out infinite;
  pointer-events: none;
  user-select: none;
  font-family: serif;
}

@keyframes omPulse {
  0%, 100% { transform: scale(1); opacity: 0.07; }
  50% { transform: scale(1.05); opacity: 0.1; }
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 3.5rem;
  color: var(--secondary-color);
  margin-bottom: 0.75rem;
  font-family: 'Gurajada', serif;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.85rem 2rem;
  border-radius: 8px;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}
.btn-primary:hover {
  background: var(--primary-hover);
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: var(--secondary-color);
  border: 2px solid var(--primary-color);
  padding: 0.85rem 2rem;
  border-radius: 8px;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}
.btn-secondary:hover {
  background: rgba(179,139,89,0.15);
  transform: translateY(-2px);
}

.scroll-chevron {
  position: absolute;
  bottom: 2rem;
  font-size: 2rem;
  color: var(--primary-color);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}

.stats-banner {
  display: flex;
  justify-content: center;
  gap: 4rem;
  padding: 3rem 2rem;
  background: var(--dark-bg);
}

.stat-item {
  text-align: center;
}
.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  font-family: 'Gurajada', serif;
  line-height: 1;
}
.stat-label {
  display: block;
  font-size: 0.95rem;
  color: var(--secondary-color);
  margin-top: 0.25rem;
}

.features-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 4rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.feature-card {
  background: var(--light-bg);
  border: 1px solid rgba(101,67,33,0.15);
  border-radius: 14px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(101,67,33,0.15);
}
.feature-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 1rem;
}
.feature-card h3 {
  color: var(--accent-color);
  margin-bottom: 0.5rem;
}
.feature-card p {
  color: var(--text-light);
  font-size: 0.92rem;
  margin: 0;
}

.quotes-section {
  padding: 4rem 2rem;
  text-align: center;
  background: rgba(74,44,6,0.04);
}
.quote-card {
  max-width: 600px;
  margin: 0 auto;
  animation: fadeIn 0.5s ease;
}
.quote-text {
  font-size: 1.4rem;
  font-style: italic;
  color: var(--accent-color);
  line-height: 1.5;
  margin-bottom: 1rem;
}
.quote-author {
  font-size: 1rem;
  color: var(--primary-color);
  font-weight: 500;
}
.quote-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
}
.quote-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(101,67,33,0.2);
  cursor: pointer;
  transition: background 0.3s ease;
}
.quote-dot.active {
  background: var(--primary-color);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.cta-banner {
  text-align: center;
  padding: 5rem 2rem;
  background: var(--dark-bg);
}
.cta-banner h2 {
  color: var(--secondary-color);
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
.btn-large {
  padding: 1.1rem 3rem;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .hero-title { font-size: 2.2rem; }
  .hero-bg-om { font-size: 12rem; }
  .stats-banner { gap: 2rem; flex-wrap: wrap; }
  .features-section { grid-template-columns: 1fr; }
}



# FILE: ./src/pages/DashboardPage.tsx

import { useState } from 'react'
import { appreciationManager, appreciationUIUtils } from '../utils/appreciationUtils'
import { gamification } from '../utils/gamification'
import type { UserStats } from '../utils/appreciationUtils'
import type { GamificationState } from '../utils/gamification'
import './DashboardPage.css'

interface BadgeDef {
  id: string
  name: string
  icon: string
  desc: string
  earned: boolean
}

function getWeeklyActivity(stats: UserStats): number[] {
  const result = [0, 0, 0, 0, 0, 0, 0]
  if (stats.totalSessions > 0) {
    const today = new Date().getDay()
    const dayIdx = today === 0 ? 6 : today - 1
    result[dayIdx] = Math.min(stats.totalPracticeTime, 60)
    if (stats.currentStreak > 1) {
      for (let i = 1; i < Math.min(stats.currentStreak, 7); i++) {
        const idx = (dayIdx - i + 7) % 7
        result[idx] = Math.max(result[idx], 10 + Math.floor(Math.random() * 20))
      }
    }
  }
  return result
}

export default function DashboardPage() {
  const [stats] = useState<UserStats>(() => appreciationManager.getStats())
  const [gstate] = useState<GamificationState>(() => gamification.getState())
  const [milestones] = useState(() => appreciationManager.getProgressMilestones())
  const [message, setMessage] = useState(() => appreciationManager.generateMotivationalMessage())
  const [activity] = useState(() => getWeeklyActivity(stats))

  const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const maxActivity = Math.max(...activity, 1)

  const allBadges: BadgeDef[] = [
    { id: 'first_session', name: 'First Step', icon: '🌱', desc: 'Complete your first session', earned: stats.totalSessions >= 1 },
    { id: 'streak_3', name: 'Consistent Yogi', icon: '🔥', desc: '3-day streak', earned: stats.currentStreak >= 3 },
    { id: 'streak_7', name: 'Devoted Seeker', icon: '⚡', desc: '7-day streak', earned: stats.currentStreak >= 7 },
    { id: 'xp_500', name: 'Sapling', icon: '🌿', desc: 'Earn 500 XP', earned: gstate.totalXP >= 500 },
    { id: 'xp_2000', name: 'Banyan Tree', icon: '🌳', desc: 'Earn 2000 XP', earned: gstate.totalXP >= 2000 },
    { id: 'sessions_10', name: 'Steady Practice', icon: '📿', desc: 'Complete 10 sessions', earned: stats.totalSessions >= 10 },
    { id: 'perfect_hold', name: 'Pure Form', icon: '✨', desc: 'Land a perfect hold (match ≥ 88%)', earned: gstate.perfectHolds >= 1 },
    { id: 'combo_5', name: 'Flow State', icon: '🌊', desc: '5× combo in a session', earned: gstate.bestCombo >= 5 },
  ]

  return (
    <div className="page-wrapper dashboard-page">
      <div className="dashboard-hero">
        <div className="level-pill">
          {gstate.levelName} — Level {gstate.level + 1}
        </div>
        <div className="xp-bar-wrapper">
          <div className="xp-bar-label">{gstate.totalXP} / {(gstate.level + 1) * 500} XP</div>
          <div className="xp-bar">
            <div
              className="xp-bar-fill"
              style={{ width: `${(gstate.totalXP % 500) / 500 * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="dashboard-stats-grid">
        <div className="dashboard-stat-card">
          <span className="dash-stat-icon">📊</span>
          <div>
            <span className="dash-stat-value">{stats.totalSessions}</span>
            <span className="dash-stat-label">Total Sessions</span>
          </div>
        </div>
        <div className="dashboard-stat-card">
          <span className="dash-stat-icon">⏱️</span>
          <div>
            <span className="dash-stat-value">{appreciationUIUtils.formatDuration(stats.totalPracticeTime)}</span>
            <span className="dash-stat-label">Practice Time</span>
          </div>
        </div>
        <div className="dashboard-stat-card">
          <span className="dash-stat-icon">🔥</span>
          <div>
            <span className="dash-stat-value">{stats.currentStreak}</span>
            <span className="dash-stat-label">Day Streak</span>
          </div>
        </div>
        <div className="dashboard-stat-card">
          <span className="dash-stat-icon">✨</span>
          <div>
            <span className="dash-stat-value">{gstate.totalXP}</span>
            <span className="dash-stat-label">Total XP</span>
          </div>
        </div>
      </div>

      <section className="dashboard-section">
        <h2>This Week</h2>
        <div className="weekly-chart">
          {activity.map((val, i) => (
            <div key={i} className="weekly-bar-col">
              <div
                className="weekly-bar"
                style={{
                  height: `${(val / maxActivity) * 100}%`,
                  opacity: val > 0 ? 1 : 0.3,
                }}
              />
              <span className="weekly-label">{DAYS[i]}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="dashboard-section">
        <h2>Your Badges</h2>
        <div className="badge-grid">
          {allBadges.map(b => (
            <div key={b.id} className={`badge-card ${b.earned ? 'earned' : 'locked'}`}>
              <span className="badge-icon">{b.earned ? b.icon : '🔒'}</span>
              <div className="badge-info">
                <strong>{b.earned ? b.name : '???'}</strong>
                <p>{b.earned ? b.desc : 'Keep practicing to unlock'}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {stats.badges && stats.badges.length > 0 && (
        <section className="dashboard-section">
          <h2>Milestones Earned</h2>
          <div className="milestone-list">
            {stats.badges.map(b => (
              <div key={b.id} className="milestone-item">
                <span className="milestone-icon">{b.icon}</span>
                <div>
                  <strong>{b.name}</strong>
                  <p>{b.description}</p>
                  <small>{new Date(b.earnedDate).toLocaleDateString()}</small>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="dashboard-section">
        <h2>Progress Goals</h2>
        <div className="milestones-grid">
          {milestones.map(m => {
            const progress = appreciationUIUtils.calculateProgress(m.current, m.target)
            return (
              <div key={m.id} className="milestone-card">
                <div className="milestone-card-header">
                  <h3>{m.title}</h3>
                  <span className="milestone-pct">{Math.round(progress)}%</span>
                </div>
                <p>{m.description}</p>
                <div className="milestone-bar">
                  <div className="milestone-bar-fill" style={{ width: `${progress}%` }} />
                </div>
                <span className="milestone-count">{m.current} / {m.target} {m.unit}</span>
              </div>
            )
          })}
        </div>
      </section>

      <section className="dashboard-section motivational-section">
        <p className="motivational-text">"{message}"</p>
        <button className="btn-new-message" onClick={() => setMessage(appreciationManager.generateMotivationalMessage())}>
          ✨ New Message
        </button>
      </section>

      <div className="dashboard-actions">
        <button className="btn-share" onClick={() => {
          const summary = appreciationManager.getAchievementSummary()
          if (navigator.share) {
            navigator.share({ title: 'My Yoga Journey', text: summary })
          } else {
            navigator.clipboard.writeText(summary).then(() => alert('Copied to clipboard!'))
          }
        }}>
          📤 Share Achievements
        </button>
        <button className="btn-reset" onClick={() => {
          if (window.confirm('Reset all progress? This cannot be undone.')) {
            appreciationManager.resetStats()
            window.location.reload()
          }
        }}>
          🔄 Reset Progress
        </button>
      </div>
    </div>
  )
}



# FILE: ./src/pages/TestsPage.tsx

import UserTests from '../components/UserTests'

export default function TestsPage() {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>Self-Assessment Tests</h1>
        <p>Track your progress with these simple no-sensor tests.</p>
      </div>
      <UserTests />
    </div>
  )
}



# FILE: ./src/pages/PracticePage.css

.practice-page {
  min-height: calc(100vh - 70px);
  padding: 1.5rem;
}

.practice-layout {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  height: calc(100vh - 100px);
}

.practice-selector {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.practice-selector h1 {
  color: var(--accent-color);
  font-size: 1.6rem;
  margin-bottom: 1rem;
}

.practice-search {
  padding: 0.7rem 1rem;
  border: 2px solid rgba(101,67,33,0.2);
  border-radius: 8px;
  font-size: 0.95rem;
  font-family: inherit;
  background: var(--light-bg);
  margin-bottom: 0.75rem;
}
.practice-search:focus {
  outline: none;
  border-color: var(--primary-color);
}

.practice-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1rem;
}
.practice-cat-btn {
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  border: 1px solid rgba(101,67,33,0.2);
  background: transparent;
  color: var(--text-light);
  font-size: 0.82rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}
.practice-cat-btn.active {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}
.practice-cat-btn:hover:not(.active) {
  background: rgba(179,139,89,0.1);
}

.practice-pose-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 0.75rem;
  overflow-y: auto;
  padding-right: 0.5rem;
  flex: 1;
}

.practice-pose-card {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem;
  border-radius: 8px;
  border: 1px solid rgba(101,67,33,0.1);
  background: var(--light-bg);
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}
.practice-pose-card:hover {
  border-color: var(--primary-color);
}
.practice-pose-card.selected {
  box-shadow: 0 0 0 2px var(--primary-color);
  border-color: var(--primary-color);
}
.practice-pose-card .pose-img {
  width: 50px;
  height: 50px;
  border-radius: 6px;
  object-fit: cover;
  flex-shrink: 0;
}
.practice-pose-info {
  flex: 1;
  min-width: 0;
}
.practice-pose-name {
  display: block;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--accent-color);
  line-height: 1.15;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.practice-pose-cat {
  display: block;
  font-size: 0.7rem;
  color: var(--text-light);
  margin-top: 0.1rem;
}

.practice-checkbox {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid rgba(101,67,33,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
  transition: all 0.2s ease;
}
.practice-checkbox.checked {
  background: var(--primary-color);
  border-color: var(--primary-color);
}

.practice-empty {
  color: var(--text-light);
  text-align: center;
  padding: 2rem;
}

.practice-tray {
  background: var(--light-bg);
  border: 1px solid rgba(101,67,33,0.15);
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 100%;
  overflow-y: auto;
}
.practice-tray h2 {
  color: var(--accent-color);
  font-size: 1.15rem;
  margin: 0;
}

.preset-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.preset-btn {
  font-size: 0.75rem;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  border: 1px solid var(--primary-color);
  background: transparent;
  color: var(--primary-color);
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}
.preset-btn:hover {
  background: var(--primary-color);
  color: white;
}

.tray-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  min-height: 100px;
}
.tray-empty {
  color: var(--text-light);
  font-size: 0.88rem;
  text-align: center;
  padding: 2rem 0;
}
.tray-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.6rem;
  border-radius: 6px;
  background: white;
  border: 1px solid rgba(101,67,33,0.1);
  transition: all 0.2s ease;
}
.tray-item.dragging {
  opacity: 0.4;
}
.tray-drag-handle {
  cursor: grab;
  color: var(--text-light);
  font-size: 0.9rem;
  user-select: none;
}
.tray-pose-name {
  flex: 1;
  font-size: 0.85rem;
  color: var(--text-color);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tray-remove {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--error-color);
  font-size: 0.85rem;
  padding: 0.2rem;
  opacity: 0.6;
  transition: opacity 0.2s ease;
}
.tray-remove:hover {
  opacity: 1;
}

.tray-settings {
  padding-top: 0.5rem;
  border-top: 1px solid rgba(101,67,33,0.1);
}
.tray-settings label {
  font-size: 0.9rem;
  color: var(--text-light);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.tray-settings select {
  padding: 0.35rem 0.6rem;
  border: 1px solid rgba(101,67,33,0.2);
  border-radius: 6px;
  font-family: inherit;
  background: white;
  color: var(--text-color);
}

.tray-actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.btn-start {
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  font-family: inherit;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-start:disabled {
  background: rgba(101,67,33,0.15);
  color: rgba(101,67,33,0.4);
  cursor: not-allowed;
}
.btn-start:not(:disabled) {
  background: var(--primary-color);
  color: white;
}
.btn-start:not(:disabled):hover {
  background: var(--primary-hover);
}

.btn-clear {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid rgba(101,67,33,0.2);
  background: transparent;
  color: var(--text-light);
  font-size: 0.85rem;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  transition: border-color 0.2s ease;
}
.btn-clear:hover {
  border-color: var(--error-color);
  color: var(--error-color);
}

@media (max-width: 1024px) {
  .practice-layout {
    grid-template-columns: 1fr;
    height: auto;
  }
  .practice-tray {
    max-height: none;
  }
}



# FILE: ./src/data/poses.ts

export type Pose = {
  name: string
  sanskrit?: string
  level?: 'beginner' | 'intermediate' | 'advanced'
  short: string
  alignmentCues?: string[]
  modifications?: string[]
  safety?: string[]
  tags?: string[]
  steps?: string[]
  image?: string
}

export const POSES: Pose[] = [
  {
    name: 'Mountain Pose',
    sanskrit: 'Tadasana',
    level: 'beginner',
    short: 'Standing foundational posture for alignment and grounding.',
    alignmentCues: ['Stack ankles under hips', 'Lift through the crown', 'Shoulders relaxed down'],
    modifications: ['Slight bend in knees if hamstrings are tight', 'Use wall support for balance'],
    safety: ['Avoid hyperextending the knees'],
    tags: ['standing', 'alignment', 'beginner'],
    steps: [
      'Stand with feet together or hip-width apart, toes spread.',
      'Distribute weight evenly across both feet.',
      'Engage thighs, lift kneecaps, tuck tailbone slightly.',
      'Roll shoulders back and down, palms forward.',
      'Lengthen spine, gaze forward, breathe for 5-10 breaths.'
    ],
    image: 'postures/tadasana.png'
  },
  {
    name: 'Downward-Facing Dog',
    sanskrit: 'Adho Mukha Svanasana',
    level: 'beginner',
    short: 'Inverted V — stretches hamstrings and shoulders, strengthens arms.',
    alignmentCues: ['Hands shoulder-width', 'Hips lift high', 'Lengthen the spine'],
    modifications: ['Bend the knees to keep a long spine', 'Use blocks under hands'],
    safety: ['Shoulder pain — reduce load or use forearm variant'],
    tags: ['inversion', 'standing', 'shoulders'],
    steps: [
      'From hands and knees, lift hips up and back.',
      'Hands shoulder-width, feet hip-width.',
      'Press chest toward thighs, hold 5 breaths.'
    ],
    image: 'postures/adhomukhasvanasana.png'
  },
  {
    name: 'Plank Pose',
    sanskrit: 'Phalakasana',
    level: 'beginner',
    short: 'Core-strengthening posture that prepares for arm balances.',
    alignmentCues: ['Shoulders over wrists', 'Neutral spine', 'Engage core'],
    modifications: ['Drop to knees for supported plank'],
    safety: ['Wrist pain — use fists or forearms'],
    tags: ['core', 'strength'],
    steps: [
      'From all fours, extend legs back, balance on hands and toes.',
      'Keep shoulders over wrists, body in a straight line.',
      'Engage core, hold for 5 breaths.'
    ],
    image: 'postures/phalakasana.png'
  },
  {
    name: 'Warrior I',
    sanskrit: 'Virabhadrasana I',
    level: 'beginner',
    short: 'Lunge with lifted arms, strengthens legs and opens chest.',
    alignmentCues: ['Front knee over ankle', 'Hips squared forward', 'Shoulders relaxed'],
    modifications: ['Shorten stance for stability', 'Hands on hips for shoulder relief'],
    safety: ['Avoid forcing hips to square if tight', 'Knee pain — reduce bend'],
    tags: ['standing', 'strength', 'hip opener'],
    steps: [
      'Step left foot back 3-4 feet, turn out 45 degrees.',
      'Bend right knee to 90 degrees, align over ankle.',
      'Square hips forward, raise arms overhead, palms facing.',
      'Gaze upward or forward, hold 5 breaths, switch sides.'
    ],
    image: 'postures/virabhadrasana1.png'
  },
  {
    name: 'Warrior II',
    sanskrit: 'Virabhadrasana II',
    level: 'beginner',
    short: 'Strong lunge with open hips — builds stamina and alignment.',
    alignmentCues: ['Front knee over ankle', 'Back foot grounded', 'Torso upright'],
    modifications: ['Shorten stance to reduce hip strain', 'Use a chair for support'],
    safety: ['Knee instability — keep knee tracking toes, don’t force depth'],
    tags: ['standing', 'hip opener', 'strength'],
    steps: [
      'From wide stance, turn right foot out 90 degrees, left foot slightly in.',
      'Bend right knee over ankle, extend arms parallel to floor.',
      'Gaze over right hand, hold 5 breaths, switch sides.'
    ],
    image: 'postures/virabhadrasana2.png'
  },
  {
    name: 'Triangle Pose',
    sanskrit: 'Trikonasana',
    level: 'intermediate',
    short: 'Lateral stretch with long spine and open chest.',
    alignmentCues: ['Lengthen both sides of torso', 'Don’t collapse the chest', 'Stack shoulders'],
    modifications: ['Use block under lower hand', 'Micro-bend in front knee'],
    safety: ['Neck strain — look down or keep neutral'],
    tags: ['standing', 'stretch', 'balance'],
    steps: [
      'Stand with feet 3-4 feet apart, right foot out 90 degrees, left at 45 degrees.',
      'Extend arms parallel to floor.',
      'Hinge at right hip, reach right hand to shin or floor, left arm up.',
      'Gaze at left hand, hold 5 breaths, switch sides.'
    ],
    image: 'postures/trikonasana.png'
  },
  {
    name: 'Tree Pose',
    sanskrit: 'Vrksasana',
    level: 'beginner',
    short: 'Single-leg balance to cultivate stability and focus.',
    alignmentCues: ['Root through standing foot', 'Press thigh into lifted foot', 'Open the hip'],
    modifications: ['Place toes on the ankle or shin (avoid knee)'],
    safety: ['Avoid placing foot on knee joint'],
    tags: ['balance', 'standing'],
    steps: [
      'Stand, shift weight to left foot.',
      'Place right foot on inner left thigh or calf.',
      'Hands to heart or overhead.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/vrksasana.png'
  },
  {
    name: 'Bridge Pose',
    sanskrit: 'Setu Bandha Sarvangasana',
    level: 'beginner',
    short: 'Gentle backbend to open chest and strengthen the posterior chain.',
    alignmentCues: ['Press evenly through feet', 'Lift hips, lengthen tailbone'],
    modifications: ['Place block under sacrum for support', 'Keep feet hip-width'],
    safety: ['Neck compression — avoid turning head while lifted'],
    tags: ['backbend', 'strength'],
    steps: [
      'Lie on back, knees bent, feet flat.',
      'Lift hips, interlace hands under back.',
      'Hold 5 breaths.'
    ],
    image: 'postures/setubandhasarvangasana.png'
  },
  {
    name: 'Child’s Pose',
    sanskrit: 'Balasana',
    level: 'beginner',
    short: 'Resting pose that gently stretches the back and hips.',
    alignmentCues: ['Allow forehead to rest', 'Breathe into the back body'],
    modifications: ['Widen knees for belly space', 'Use bolsters under torso'],
    safety: [],
    tags: ['rest', 'release'],
    steps: [
      'Kneel, sit on heels.',
      'Fold forward, arms extended.',
      'Forehead to floor, hold 5-10 breaths.'
    ],
    image: 'postures/balasana.png'
  },
  {
    name: 'Cobra Pose',
    sanskrit: 'Bhujangasana',
    level: 'beginner',
    short: 'Backbend that lengthens the spine and opens the chest.',
    alignmentCues: ['Keep pubic bone grounded', 'Lift through the sternum, not the neck'],
    modifications: ['Keep elbows bent for low cobra', 'Engage legs to protect lower back'],
    safety: ['Lower back pain — use gentler variation'],
    tags: ['backbend', 'spine'],
    steps: [
      'Lie face down, hands under shoulders.',
      'Inhale, lift chest, keep elbows bent.',
      'Gaze forward, hold 5 breaths.'
    ],
    image: 'postures/bhujangasana.png'
  },
  {
    name: 'Seated Forward Fold',
    sanskrit: 'Paschimottanasana',
    level: 'beginner',
    short: 'Hamstring and spine stretch; encourage length before depth.',
    alignmentCues: ['Lengthen spine before folding', 'Lead with the chest, not the head'],
    modifications: ['Bend knees or use strap around feet'],
    safety: ['Avoid forcing the fold with rounded spine'],
    tags: ['seated', 'stretch'],
    steps: [
      'Sit with legs extended, feet flexed.',
      'Inhale, lengthen spine; exhale, fold forward from hips.',
      'Reach hands to feet or shins.',
      'Hold for 5-10 breaths.'
    ],
    image: 'postures/paschimottanasana.png'
  },
  {
    name: 'Chair Pose',
    sanskrit: 'Utkatasana',
    level: 'beginner',
    short: 'Powerful standing posture to build heat and leg strength.',
    alignmentCues: ['Sit back into hips', 'Knees track toes', 'Lift arms overhead'],
    modifications: ['Hands at heart for less shoulder strain', 'Use wall support'],
    safety: ['Knee issues — keep shallower bend'],
    tags: ['strength', 'standing'],
    steps: [
      'Stand with feet together, bend knees as if sitting.',
      'Raise arms overhead, palms facing or touching.',
      'Sink hips back, keep chest lifted.',
      'Hold for 5-10 breaths, release.'
    ],
    image: 'postures/utkatasana.png'
  },
  {
    name: 'Corpse Pose',
    sanskrit: 'Savasana',
    level: 'beginner',
    short: 'Final relaxation to integrate practice.',
    alignmentCues: ['Let the body soften', 'Breathe naturally'],
    modifications: ['Support knees with bolster for low back comfort'],
    safety: [],
    tags: ['rest', 'integration'],
    steps: [
      'Lie flat on back, legs apart, arms at sides, palms up.',
      'Close eyes, relax muscles.',
      'Breathe naturally for 5-10 minutes.'
    ],
    image: 'postures/savasana.png'
  },
  {
    name: 'Extended Side Angle Pose',
    sanskrit: 'Parsvakonasana',
    level: 'intermediate',
    short: 'Side stretch with deep lunge, opens hips and chest.',
    alignmentCues: ['Front knee over ankle', 'Rotate chest upward', 'Extend top arm over ear'],
    modifications: ['Rest forearm on thigh', 'Use block under hand'],
    safety: ['Avoid collapsing chest', 'Knee instability — align knee with toes'],
    tags: ['standing', 'stretch', 'balance'],
    steps: [
      'From wide stance, turn right foot out, bend right knee over ankle.',
      'Place right forearm on thigh or hand on floor, extend left arm over ear.',
      'Rotate chest open, gaze up or forward.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/parsvakonasana.png'
  },
  {
    name: 'Revolved Triangle Pose',
    sanskrit: 'Parivrtta Trikonasana',
    level: 'intermediate',
    short: 'Twisting pose that strengthens legs and enhances spinal mobility.',
    alignmentCues: ['Lengthen spine before twisting', 'Keep hips level', 'Extend top arm vertically'],
    modifications: ['Use block under hand', 'Shorten stance for stability'],
    safety: ['Avoid forcing twist if spine is tight', 'Neck strain — gaze down'],
    tags: ['standing', 'twist', 'balance'],
    steps: [
      'From triangle stance, place left hand outside right foot.',
      'Twist torso, extend right arm up.',
      'Gaze at right hand, hold 5 breaths, switch sides.'
    ],
    image: 'postures/parivrttatrikonasana.png'
  },
  {
    name: 'Revolved Side Angle Pose',
    sanskrit: 'Parivrtta Parsvakonasana',
    level: 'intermediate',
    short: 'Deep spinal twist with lunge, improves balance and digestion.',
    alignmentCues: ['Front knee over ankle', 'Twist from torso', 'Press palms together'],
    modifications: ['Place back knee down', 'Use block under hand'],
    safety: ['Knee pain — reduce lunge depth', 'Avoid over-twisting neck'],
    tags: ['standing', 'twist', 'strength'],
    steps: [
      'From warrior II, place left elbow outside right knee.',
      'Press palms together, twist torso, gaze upward.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/parivrttaparsvakonasana.png'
  },
  {
    name: 'Wide-Legged Forward Bend',
    sanskrit: 'Prasarita Padottanasana',
    level: 'intermediate',
    short: 'Stretches hamstrings and calves, calms the mind.',
    alignmentCues: ['Keep feet parallel', 'Lengthen spine before folding', 'Engage quads'],
    modifications: ['Use blocks under hands', 'Bend knees slightly'],
    safety: ['Avoid rounding spine', 'Hamstring strain — don’t force depth'],
    tags: ['standing', 'stretch', 'forward bend'],
    steps: [
      'Stand with feet wide apart, toes slightly in.',
      'Hinge at hips, bring head toward floor, hands on floor or blocks.',
      'Lengthen spine, hold for 5-10 breaths.'
    ],
    image: 'postures/prasaritapadottanasana.png'
  },
  {
    name: 'Standing Forward Bend',
    sanskrit: 'Uttanasana',
    level: 'beginner',
    short: 'Deep hamstring and back stretch, promotes relaxation.',
    alignmentCues: ['Hinge at hips', 'Lengthen spine', 'Relax neck'],
    modifications: ['Bend knees for tight hamstrings', 'Use blocks under hands'],
    safety: ['Avoid forcing head down', 'Back issues — keep slight bend in knees'],
    tags: ['standing', 'forward bend', 'stretch'],
    steps: [
      'Stand, hinge at hips, bring head toward floor.',
      'Place hands on floor or shins.',
      'Hold 5-10 breaths.'
    ],
    image: 'postures/uttanasana.png'
  },
  {
    name: 'Gate Pose',
    sanskrit: 'Parighasana',
    level: 'intermediate',
    short: 'Side stretch that opens chest and stretches hamstrings.',
    alignmentCues: ['Extend leg straight', 'Keep torso long', 'Reach over extended leg'],
    modifications: ['Use block under hand', 'Bend extended knee slightly'],
    safety: ['Avoid collapsing side body', 'Hamstring strain — ease into stretch'],
    tags: ['standing', 'stretch', 'side bend'],
    steps: [
      'Kneel, extend right leg to side, toes pointing right.',
      'Reach right arm to right foot, left arm over ear.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/parighasana.png'
  },
  {
    name: 'Low Lunge',
    sanskrit: 'Anjaneyasana',
    level: 'beginner',
    short: 'Hip opener and quad stretch, improves balance.',
    alignmentCues: ['Front knee over ankle', 'Back knee grounded', 'Lift chest'],
    modifications: ['Use blocks under hands', 'Rest hands on front knee'],
    safety: ['Knee pain — pad back knee', 'Avoid over-arching lower back'],
    tags: ['standing', 'hip opener', 'stretch'],
    steps: [
      'From lunge, lower left knee to floor, right knee over ankle.',
      'Raise arms overhead, arch back slightly.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/anjaneyasana.png'
  },
  {
    name: 'Easy Pose',
    sanskrit: 'Sukhasana',
    level: 'beginner',
    short: 'Comfortable seated posture for meditation and hip opening.',
    alignmentCues: ['Sit on sit bones', 'Lengthen spine', 'Relax shoulders'],
    modifications: ['Sit on blanket for elevation', 'Use wall for back support'],
    safety: ['Knee discomfort — use props under knees'],
    tags: ['seated', 'meditation', 'hip opener'],
    steps: [
      'Sit on floor with legs crossed, shins parallel.',
      'Place hands on knees, palms up or down.',
      'Lengthen spine, relax shoulders.',
      'Close eyes, breathe deeply for 1-5 minutes.'
    ],
    image: 'postures/sukhasana.png'
  },
  {
    name: 'Staff Pose',
    sanskrit: 'Dandasana',
    level: 'beginner',
    short: 'Seated posture for spinal alignment and core strength.',
    alignmentCues: ['Sit on sit bones', 'Flex feet', 'Press thighs down'],
    modifications: ['Sit on folded blanket', 'Use wall for back support'],
    safety: ['Hamstring tightness — slightly bend knees'],
    tags: ['seated', 'alignment', 'core'],
    steps: [
      'Sit with legs extended forward, feet flexed.',
      'Place hands beside hips, fingers forward.',
      'Lengthen spine, press thighs down.',
      'Hold for 5-10 breaths.'
    ],
    image: 'postures/dandasana.png'
  },
  {
    name: 'Bound Angle Pose',
    sanskrit: 'Baddha Konasana',
    level: 'beginner',
    short: 'Hip opener that stretches inner thighs and groin.',
    alignmentCues: ['Soles together', 'Lengthen spine', 'Gently press knees down'],
    modifications: ['Sit on blanket', 'Use blocks under knees'],
    safety: ['Avoid forcing knees down', 'Hip pain — ease into stretch'],
    tags: ['seated', 'hip opener', 'stretch'],
    steps: [
      'Sit with soles of feet together, knees out.',
      'Hold feet, lengthen spine.',
      'Gently press knees down with elbows if comfortable.',
      'Hold for 5-10 breaths.'
    ],
    image: 'postures/baddhakonasana.png'
  },
  {
    name: 'Head-to-Knee Forward Bend',
    sanskrit: 'Janu Sirsasana',
    level: 'intermediate',
    short: 'Asymmetrical forward bend, stretches hamstrings and spine.',
    alignmentCues: ['Square hips to extended leg', 'Lengthen spine before folding', 'Keep foot flexed'],
    modifications: ['Use strap around foot', 'Bend extended knee slightly'],
    safety: ['Avoid rounding spine', 'Hamstring strain — don’t force reach'],
    tags: ['seated', 'forward bend', 'stretch'],
    steps: [
      'Sit with right leg extended, left foot to inner right thigh.',
      'Inhale lengthen, exhale fold over right leg.',
      'Reach hands to foot or shin.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/janusirsasana.png'
  },
  {
    name: 'Wide-Angle Seated Forward Bend',
    sanskrit: 'Upavistha Konasana',
    level: 'intermediate',
    short: 'Deep stretch for inner thighs and hamstrings.',
    alignmentCues: ['Keep toes pointing up', 'Lengthen spine before folding', 'Engage quads'],
    modifications: ['Use bolster under torso', 'Bend knees slightly'],
    safety: ['Avoid forcing fold', 'Hamstring strain — ease into stretch'],
    tags: ['seated', 'forward bend', 'stretch'],
    steps: [
      'Sit with legs spread wide, toes pointing up.',
      'Inhale, lengthen spine; exhale, fold forward from hips.',
      'Place hands on floor or reach for feet.',
      'Hold for 5-10 breaths.'
    ],
    image: 'postures/upavisthakonasana.png'
  },
  {
    name: 'Three-Limbed Forward Bend',
    sanskrit: 'Triang Mukhaikapada Paschimottanasana',
    level: 'intermediate',
    short: 'Asymmetrical forward bend with spinal stretch.',
    alignmentCues: ['Square hips to extended leg', 'Keep spine long', 'Flex extended foot'],
    modifications: ['Use strap around foot', 'Sit on blanket for elevation'],
    safety: ['Avoid rounding spine', 'Knee discomfort — use prop support'],
    tags: ['seated', 'forward bend', 'stretch'],
    steps: [
      'Sit with right leg bent, heel near pelvis, left leg extended.',
      'Inhale, lengthen spine; exhale, fold over left leg.',
      'Reach for foot or shin, hold for 5 breaths, switch sides.'
    ],
    image: 'postures/triangmukhaikapada.png'
  },
  {
    name: 'Marichi’s Pose I',
    sanskrit: 'Marichyasana I',
    level: 'intermediate',
    short: 'Seated twist with forward bend, aids digestion.',
    alignmentCues: ['Lengthen spine before twisting', 'Keep bent knee grounded', 'Shoulders relaxed'],
    modifications: ['Use strap to bind', 'Sit on blanket'],
    safety: ['Avoid forcing bind', 'Back pain — reduce twist'],
    tags: ['seated', 'twist', 'forward bend'],
    steps: [
      'Sit with right leg bent, foot flat, left leg extended.',
      'Wrap right arm around right knee, left hand back.',
      'Twist right, hold for 5 breaths, switch sides.'
    ],
    image: 'postures/marichyasana1.png'
  },
  {
    name: 'Marichi’s Pose II',
    sanskrit: 'Marichyasana II',
    level: 'advanced',
    short: 'Deep twist with lotus leg, enhances spinal mobility.',
    alignmentCues: ['Keep lotus leg stable', 'Lengthen spine', 'Twist from torso'],
    modifications: ['Skip lotus, bend knee', 'Use strap for bind'],
    safety: ['Knee pain — avoid lotus position', 'Avoid forcing twist'],
    tags: ['seated', 'twist', 'advanced'],
    steps: [
      'Sit with right leg in lotus, left leg bent, foot flat.',
      'Wrap left arm around left knee, right hand back.',
      'Twist left, hold for 5 breaths, switch sides.'
    ],
    image: 'postures/marichyasana2.png'
  },
  {
    name: 'Marichi’s Pose IV',
    sanskrit: 'Marichyasana IV',
    level: 'advanced',
    short: 'Advanced twist with lotus and bind, opens hips.',
    alignmentCues: ['Stable lotus leg', 'Lengthen spine', 'Twist evenly'],
    modifications: ['Skip lotus, bend knee', 'Use strap for bind'],
    safety: ['Knee pain — avoid lotus', 'Back strain — reduce twist'],
    tags: ['seated', 'twist', 'advanced'],
    steps: [
      'Sit, right leg in lotus, left leg bent, foot flat.',
      'Wrap right arm around back, left arm around left knee.',
      'Twist left, hold 5 breaths, switch sides.'
    ],
    image: 'postures/marichyasana4.png'
  },
  {
    name: 'Reclining Bound Angle Pose',
    sanskrit: 'Supta Baddha Konasana',
    level: 'beginner',
    short: 'Restorative pose that opens hips and chest.',
    alignmentCues: ['Soles together', 'Relax knees outward', 'Keep spine neutral'],
    modifications: ['Use blocks under knees', 'Place bolster under back'],
    safety: ['Hip discomfort — use more support', 'Avoid forcing knees down'],
    tags: ['supine', 'restorative', 'hip opener'],
    steps: [
      'Lie on back, soles together, knees out.',
      'Place arms at sides or overhead.',
      'Relax for 5-10 breaths.'
    ],
    image: 'postures/suptabaddhakonasana.png'
  },
  {
    name: 'Happy Baby Pose',
    sanskrit: 'Ananda Balasana',
    level: 'beginner',
    short: 'Gentle hip opener, releases lower back.',
    alignmentCues: ['Keep spine flat', 'Hold outer feet', 'Knees wide'],
    modifications: ['Hold thighs instead of feet', 'Use strap around feet'],
    safety: ['Avoid pulling neck', 'Lower back pain — reduce pull'],
    tags: ['supine', 'hip opener', 'restorative'],
    steps: [
      'Lie on back, draw knees to chest.',
      'Grab outer feet, knees wide.',
      'Gently rock side to side, hold for 5 breaths.'
    ],
    image: 'postures/anandabalasana.png'
  },
  {
    name: 'Legs-Up-The-Wall Pose',
    sanskrit: 'Viparita Karani',
    level: 'beginner',
    short: 'Restorative inversion to relieve tired legs.',
    alignmentCues: ['Hips close to wall', 'Legs straight up', 'Relax arms'],
    modifications: ['Use bolster under hips', 'Bend knees slightly'],
    safety: ['Avoid if high blood pressure', 'Neck strain — keep head neutral'],
    tags: ['supine', 'restorative', 'inversion'],
    steps: [
      'Sit next to wall, swing legs up wall.',
      'Lie back, hips close to wall.',
      'Arms at sides, relax for 5-10 minutes.'
    ],
    image: 'postures/viparitakarani.png'
  },
  {
    name: 'Reclining Spinal Twist',
    sanskrit: 'Jathara Parivartanasana',
    level: 'beginner',
    short: 'Gentle twist to aid digestion and relax back.',
    alignmentCues: ['Keep shoulders grounded', 'Drop knees gently', 'Gaze opposite twist'],
    modifications: ['Use bolster under knees', 'Keep one leg straight'],
    safety: ['Avoid forcing twist', 'Back pain — reduce range'],
    tags: ['supine', 'twist', 'restorative'],
    steps: [
      'Lie on back, arms out in T.',
      'Draw knees to chest, drop to right.',
      'Gaze left, hold 5 breaths, switch sides.'
    ],
    image: 'postures/jatharaparivartanasana.png'
  },
  {
    name: 'Reclining Hand-to-Big-Toe Pose',
    sanskrit: 'Supta Padangusthasana',
    level: 'beginner',
    short: 'Hamstring stretch that relieves lower back tension.',
    alignmentCues: ['Keep extended leg grounded', 'Hold toe or strap', 'Spine flat'],
    modifications: ['Use strap around foot', 'Bend supporting knee'],
    safety: ['Avoid overextending leg', 'Hamstring strain — ease into stretch'],
    tags: ['supine', 'stretch', 'restorative'],
    steps: [
      'Lie on back, lift right leg, hold big toe with right hand.',
      'Extend leg toward ceiling, keep left leg on floor.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/suptapadangusthasana.png'
  },
  {
    name: 'Locust Pose',
    sanskrit: 'Salabhasana',
    level: 'beginner',
    short: 'Back strengthener, improves posture and energy.',
    alignmentCues: ['Lift chest and legs evenly', 'Keep neck neutral', 'Engage glutes'],
    modifications: ['Lift one leg at a time', 'Keep arms by sides'],
    safety: ['Lower back pain — lift less', 'Neck strain — gaze down'],
    tags: ['prone', 'backbend', 'strength'],
    steps: [
      'Lie face down, arms at sides.',
      'Inhale, lift head, chest, arms, and legs.',
      'Hold for 5 breaths.'
    ],
    image: 'postures/salabhasana.png'
  },
  {
    name: 'Bow Pose',
    sanskrit: 'Dhanurasana',
    level: 'intermediate',
    short: 'Deep backbend, stretches front body, boosts energy.',
    alignmentCues: ['Grab ankles, not feet', 'Lift thighs and chest', 'Keep neck neutral'],
    modifications: ['Use strap around ankles', 'Lift chest only for beginners'],
    safety: ['Avoid if lower back issues', 'Don’t force lift'],
    tags: ['prone', 'backbend', 'stretch'],
    steps: [
      'Lie face down, bend knees, grab ankles.',
      'Inhale, lift chest and thighs.',
      'Hold 5 breaths.'
    ],
    image: 'postures/dhanurasana.png'
  },
  {
    name: 'Crocodile Pose',
    sanskrit: 'Makarasana',
    level: 'beginner',
    short: 'Restorative prone pose, aids breathing and relaxation.',
    alignmentCues: ['Forehead on hands', 'Legs relaxed', 'Breathe deeply'],
    modifications: ['Use blanket under chest', 'Widen legs for comfort'],
    safety: ['Neck discomfort — adjust hand position'],
    tags: ['prone', 'restorative', 'relaxation'],
    steps: [
      'Lie face down, forehead on stacked hands.',
      'Legs apart, heels in.',
      'Breathe deeply for 5-10 minutes.'
    ],
    image: 'postures/makarasana.png'
  },
  {
    name: 'Half Locust Pose',
    sanskrit: 'Ardha Shalabhasana',
    level: 'beginner',
    short: 'Asymmetrical back strengthener, improves balance.',
    alignmentCues: ['Lift one leg and opposite arm', 'Keep pelvis grounded', 'Gaze down'],
    modifications: ['Lift only leg or arm', 'Use cushion under hips'],
    safety: ['Avoid over-lifting', 'Back pain — reduce range'],
    tags: ['prone', 'backbend', 'strength'],
    steps: [
      'Lie face down.',
      'Lift right leg and left arm.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/ardhashalabhasana.png'
  },
  {
    name: 'Eagle Pose',
    sanskrit: 'Garudasana',
    level: 'intermediate',
    short: 'Balancing pose that stretches shoulders and hips.',
    alignmentCues: ['Cross thighs tightly', 'Wrap arms fully', 'Sink into standing leg'],
    modifications: ['Rest toes on floor', 'Cross arms without wrapping'],
    safety: ['Knee pain — avoid deep bend', 'Balance issues — use wall'],
    tags: ['balance', 'standing', 'stretch'],
    steps: [
      'Stand, cross right thigh over left, hook foot if possible.',
      'Cross left arm over right, bend elbows, palms together.',
      'Bend standing knee, hold 5 breaths, switch sides.'
    ],
    image: 'postures/garudasana.png'
  },
  {
    name: 'Side Plank Pose',
    sanskrit: 'Vasisthasana',
    level: 'intermediate',
    short: 'Strengthens arms and core, improves balance.',
    alignmentCues: ['Stack hips and shoulders', 'Engage core', 'Lift top arm straight'],
    modifications: ['Drop bottom knee to floor', 'Rest top arm on hip'],
    safety: ['Wrist pain — use forearm', 'Avoid collapsing hips'],
    tags: ['balance', 'core', 'strength'],
    steps: [
      'From plank, shift to right hand and outer foot.',
      'Stack left foot on right, raise left arm.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/vasisthasana.png'
  },
  {
    name: 'Crow Pose',
    sanskrit: 'Bakasana',
    level: 'intermediate',
    short: 'Arm balance that builds strength and confidence.',
    alignmentCues: ['Knees high on upper arms', 'Lean forward', 'Engage core'],
    modifications: ['Keep toes on floor', 'Use block under feet'],
    safety: ['Wrist pain — spread fingers wide', 'Avoid falling on head'],
    tags: ['balance', 'arm balance', 'core'],
    steps: [
      'Squat, place hands on floor shoulder-width.',
      'Bend elbows, place knees on upper arms.',
      'Lift feet, balance on hands, hold 5 breaths.'
    ],
    image: 'postures/bakasana.png'
  },
  {
    name: 'Dancer’s Pose',
    sanskrit: 'Natarajasana',
    level: 'intermediate',
    short: 'Balancing backbend, stretches quads and shoulders.',
    alignmentCues: ['Kick foot into hand', 'Extend opposite arm', 'Keep hips square'],
    modifications: ['Use strap to hold foot', 'Hold wall for balance'],
    safety: ['Avoid over-arching back', 'Knee pain — reduce kick'],
    tags: ['balance', 'backbend', 'stretch'],
    steps: [
      'Stand, grab right ankle with right hand.',
      'Extend left arm forward, kick foot into hand.',
      'Hinge forward, hold 5 breaths, switch sides.'
    ],
    image: 'postures/natarajasana.png'
  },
  {
    name: 'Side Crow Pose',
    sanskrit: 'Parsva Bakasana',
    level: 'advanced',
    short: 'Twisting arm balance, strengthens core and arms.',
    alignmentCues: ['Twist torso fully', 'Knees on one arm', 'Lean forward'],
    modifications: ['Keep toes on floor', 'Use block under feet'],
    safety: ['Wrist pain — spread fingers', 'Avoid falling on head'],
    tags: ['balance', 'arm balance', 'twist'],
    steps: [
      'Squat, twist torso to right, place hands on floor.',
      'Place knees on left upper arm, bend elbows.',
      'Lift feet, balance, hold 5 breaths, switch sides.'
    ],
    image: 'postures/parsvabakasana.png'
  },
  {
    name: 'Crow Pose (Knees Bent)',
    sanskrit: 'Kakasana',
    level: 'intermediate',
    short: 'Beginner-friendly arm balance, strengthens wrists.',
    alignmentCues: ['Knees on upper arms', 'Lean forward', 'Engage core'],
    modifications: ['Keep toes on floor', 'Use block under feet'],
    safety: ['Wrist pain — spread fingers', 'Avoid falling forward'],
    tags: ['balance', 'arm balance', 'core'],
    steps: [
      'Squat, place hands on floor shoulder-width.',
      'Bend elbows, place knees on upper arms, keep knees bent.',
      'Lift feet, balance, hold 5 breaths.'
    ],
    image: 'postures/kakasana.png'
  },
  {
    name: 'Scale Pose',
    sanskrit: 'Tulasana',
    level: 'advanced',
    short: 'Arm balance with lotus, strengthens core and arms.',
    alignmentCues: ['Press hands firmly', 'Lift hips', 'Engage core'],
    modifications: ['Use cross-legged position', 'Place blocks under hands'],
    safety: ['Knee pain — avoid lotus', 'Wrist strain — use props'],
    tags: ['balance', 'arm balance', 'advanced'],
    steps: [
      'Sit in lotus or cross-legged, place hands beside hips.',
      'Press hands down, lift hips and legs off floor.',
      'Balance, hold for 5 breaths.'
    ],
    image: 'postures/tulasana.png'
  },
  {
    name: 'Flying Pigeon Pose',
    sanskrit: 'Eka Pada Galavasana',
    level: 'advanced',
    short: 'Complex arm balance with hip opener.',
    alignmentCues: ['Shin on upper arms', 'Extend back leg', 'Lean forward'],
    modifications: ['Keep back toes on floor', 'Use blocks under hands'],
    safety: ['Wrist pain — spread fingers', 'Avoid falling forward'],
    tags: ['balance', 'arm balance', 'hip opener'],
    steps: [
      'Stand, place right shin over left upper arm.',
      'Bend elbows, lean forward, extend left leg back.',
      'Balance on hands, hold 5 breaths, switch sides.'
    ],
    image: 'postures/ekapadagalavasana.png'
  },
  {
    name: 'Half Moon Pose',
    sanskrit: 'Ardha Chandrasana',
    level: 'intermediate',
    short: 'Balancing pose with side stretch, strengthens legs.',
    alignmentCues: ['Lift leg parallel to floor', 'Stack hips', 'Extend top arm'],
    modifications: ['Use block under hand', 'Rest back against wall'],
    safety: ['Avoid locking standing knee', 'Balance issues — use support'],
    tags: ['balance', 'standing', 'stretch'],
    steps: [
      'From triangle, bend right knee, place right hand on floor.',
      'Lift left leg parallel to floor, extend left arm up.',
      'Gaze at floor or up, hold 5 breaths, switch sides.'
    ],
    image: 'postures/ardhachandrasana.png'
  },
  {
    name: 'Shoulder Stand',
    sanskrit: 'Sarvangasana',
    level: 'intermediate',
    short: 'Inversion that stimulates thyroid and calms mind.',
    alignmentCues: ['Lift legs vertically', 'Support lower back', 'Keep neck neutral'],
    modifications: ['Use blankets under shoulders', 'Bend knees if needed'],
    safety: ['Neck pain — avoid or use support', 'High blood pressure — skip'],
    tags: ['inversion', 'strength', 'calming'],
    steps: [
      'Lie on back, lift legs overhead.',
      'Support lower back with hands, elbows on floor.',
      'Extend legs up, hold 5-10 breaths.'
    ],
    image: 'postures/sarvangasana.png'
  },
  {
    name: 'Plow Pose',
    sanskrit: 'Halasana',
    level: 'intermediate',
    short: 'Inversion that stretches spine and calms nervous system.',
    alignmentCues: ['Toes touch floor behind head', 'Keep neck neutral', 'Support back'],
    modifications: ['Use blocks under feet', 'Bend knees to chest'],
    safety: ['Neck strain — use props', 'Avoid if high blood pressure'],
    tags: ['inversion', 'stretch', 'calming'],
    steps: [
      'From shoulder stand, lower toes to floor behind head.',
      'Hands interlocked or supporting back.',
      'Hold 5 breaths.'
    ],
    image: 'postures/halasana.png'
  },
  {
    name: 'Headstand',
    sanskrit: 'Sirsasana',
    level: 'advanced',
    short: 'Inversion that increases blood flow to brain, builds focus.',
    alignmentCues: ['Crown on floor', 'Elbows under shoulders', 'Lift legs straight'],
    modifications: ['Practice against wall', 'Keep knees bent'],
    safety: ['Neck pain — avoid', 'Use spotter for beginners'],
    tags: ['inversion', 'balance', 'advanced'],
    steps: [
      'Kneel, interlace fingers, place crown on floor.',
      'Lift knees, walk feet in.',
      'Lift legs up, balance, hold 5-10 breaths.'
    ],
    image: 'postures/sirsasana.png'
  },
  {
    name: 'Forearm Stand',
    sanskrit: 'Pincha Mayurasana',
    level: 'advanced',
    short: 'Inversion that strengthens arms and opens shoulders.',
    alignmentCues: ['Elbows under shoulders', 'Lift hips high', 'Engage core'],
    modifications: ['Practice against wall', 'Keep one leg down'],
    safety: ['Shoulder pain — avoid', 'Use spotter for beginners'],
    tags: ['inversion', 'balance', 'advanced'],
    steps: [
      'Forearms on floor, elbows under shoulders.',
      'Walk feet in, lift one leg, then both.',
      'Balance, hold 5 breaths.'
    ],
    image: 'postures/pinchamayurasana.png'
  },
  {
    name: 'Handstand',
    sanskrit: 'Adho Mukha Vrksasana',
    level: 'advanced',
    short: 'Full-body inversion, builds strength and balance.',
    alignmentCues: ['Hands shoulder-width', 'Stack hips over shoulders', 'Engage core'],
    modifications: ['Practice against wall', 'Keep one leg down'],
    safety: ['Wrist pain — use padding', 'Avoid if shoulder issues'],
    tags: ['inversion', 'balance', 'advanced'],
    steps: [
      'Place hands shoulder-width on floor, facing wall.',
      'Kick one leg up, then the other, balance against wall.',
      'Keep arms straight, hold for 5-10 breaths.'
    ],
    image: 'postures/adhomukhavrksasana.png'
  },
  {
    name: 'Camel Pose',
    sanskrit: 'Ustrasana',
    level: 'intermediate',
    short: 'Deep backbend that opens chest and boosts mood.',
    alignmentCues: ['Hips over knees', 'Lift chest', 'Keep neck neutral'],
    modifications: ['Hands on lower back', 'Tuck toes under'],
    safety: ['Lower back pain — reduce depth', 'Neck strain — gaze forward'],
    tags: ['backbend', 'stretch', 'energy'],
    steps: [
      'Kneel, hands on lower back.',
      'Arch back, reach for heels.',
      'Head back if comfortable, hold 5 breaths.'
    ],
    image: 'postures/ustrasana.png'
  },
  {
    name: 'Wheel Pose',
    sanskrit: 'Urdhva Dhanurasana',
    level: 'advanced',
    short: 'Full backbend that strengthens arms and opens heart.',
    alignmentCues: ['Hands by ears', 'Press evenly through feet', 'Lift hips high'],
    modifications: ['Use blocks under hands', 'Practice bridge pose instead'],
    safety: ['Shoulder pain — avoid', 'Lower back issues — reduce lift'],
    tags: ['backbend', 'strength', 'advanced'],
    steps: [
      'Lie on back, hands by ears, feet flat.',
      'Press up, straighten arms and legs.',
      'Hold 5 breaths.'
    ],
    image: 'postures/urdhvadhanurasana.png'
  },
  {
    name: 'Fish Pose',
    sanskrit: 'Matsyasana',
    level: 'intermediate',
    short: 'Backbend that opens throat and chest, aids breathing.',
    alignmentCues: ['Crown on floor', 'Lift chest', 'Extend legs'],
    modifications: ['Use bolster under back', 'Keep knees bent'],
    safety: ['Neck pain — use support', 'Avoid forcing head back'],
    tags: ['backbend', 'stretch', 'chest opener'],
    steps: [
      'Lie on back, legs extended.',
      'Lift chest, place crown on floor.',
      'Hands under hips, hold 5 breaths.'
    ],
    image: 'postures/matsyasana.png'
  },
  {
    name: 'Sphinx Pose',
    sanskrit: 'Sphuxtasana',
    level: 'beginner',
    short: 'Gentle backbend, strengthens spine, opens chest.',
    alignmentCues: ['Forearms grounded', 'Lift chest', 'Relax glutes'],
    modifications: ['Use blanket under hips', 'Rest chest lower'],
    safety: ['Lower back pain — reduce lift', 'Neck strain — gaze down'],
    tags: ['backbend', 'prone', 'beginner'],
    steps: [
      'Lie prone, forearms on floor.',
      'Lift chest, gaze forward.',
      'Hold 5 breaths.'
    ],
    image: 'postures/sphuxtasana.png'
  },
  {
    name: 'Upward-Facing Dog',
    sanskrit: 'Urdhva Mukha Svanasana',
    level: 'intermediate',
    short: 'Backbend that opens chest and strengthens arms.',
    alignmentCues: ['Press hands firmly', 'Lift thighs off floor', 'Shoulders away from ears'],
    modifications: ['Keep thighs on floor for cobra', 'Use blocks under hands'],
    safety: ['Lower back pain — reduce lift', 'Wrist pain — use padding'],
    tags: ['backbend', 'prone', 'strength'],
    steps: [
      'Lie prone, hands under shoulders.',
      'Press up, straighten arms, lift thighs off floor.',
      'Gaze forward, hold 5 breaths.'
    ],
    image: 'postures/urdhvamukhasvanasana.png'
  },
  {
    name: 'Pigeon Pose (Backbend)',
    sanskrit: 'Kapotasana',
    level: 'advanced',
    short: 'Deep backbend that opens chest and hips.',
    alignmentCues: ['Hips square', 'Lift chest', 'Reach for feet'],
    modifications: ['Use blocks under hands', 'Practice half pigeon'],
    safety: ['Back pain — reduce depth', 'Knee issues — use support'],
    tags: ['backbend', 'hip opener', 'advanced'],
    steps: [
      'Kneel, lean back, place hands near feet.',
      'Arch back, bring head toward feet.',
      'Hold 5 breaths.'
    ],
    image: 'postures/kapotasana.png'
  },
  {
    name: 'Bharadvaja’s Twist',
    sanskrit: 'Bharadvajasana',
    level: 'beginner',
    short: 'Gentle seated twist, improves spinal flexibility.',
    alignmentCues: ['Lengthen spine', 'Twist from torso', 'Keep hips grounded'],
    modifications: ['Sit on blanket', 'Use hand on knee instead of bind'],
    safety: ['Avoid forcing twist', 'Back pain — reduce range'],
    tags: ['twist', 'seated', 'beginner'],
    steps: [
      'Sit with legs extended, bend knees to left.',
      'Twist right, hand behind, left on knee.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/bharadvajasana.png'
  },
  {
    name: 'Half Lord of the Fishes',
    sanskrit: 'Ardha Matsyendrasana',
    level: 'intermediate',
    short: 'Deep spinal twist, massages organs, energizes spine.',
    alignmentCues: ['Lengthen spine', 'Twist from torso', 'Keep hips square'],
    modifications: ['Use strap for bind', 'Sit on blanket'],
    safety: ['Avoid forcing twist', 'Knee pain — adjust foot placement'],
    tags: ['twist', 'seated', 'stretch'],
    steps: [
      'Sit, right foot over left thigh.',
      'Twist left, elbow outside right knee.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/ardhamatsyendrasana.png'
  },
  {
    name: 'Marichi’s Pose III',
    sanskrit: 'Marichyasana III',
    level: 'intermediate',
    short: 'Seated spinal twist, stimulates digestion.',
    alignmentCues: ['Lengthen spine', 'Twist from torso', 'Keep bent knee grounded'],
    modifications: ['Use strap for bind', 'Sit on blanket'],
    safety: ['Avoid forcing twist', 'Back pain — reduce range'],
    tags: ['twist', 'seated', 'stretch'],
    steps: [
      'Sit, bend right knee, foot flat.',
      'Twist left, elbow outside knee.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/marichyasana3.png'
  },
  {
    name: 'Reclining Twist',
    sanskrit: 'Supta Parivartanasana',
    level: 'beginner',
    short: 'Gentle supine twist, aids digestion and relaxation.',
    alignmentCues: ['Keep shoulders grounded', 'Drop knees gently', 'Gaze opposite twist'],
    modifications: ['Use bolster under knees', 'Keep one leg straight'],
    safety: ['Avoid forcing twist', 'Back pain — reduce range'],
    tags: ['twist', 'supine', 'restorative'],
    steps: [
      'Lie back, knees to chest.',
      'Drop knees right, arms out.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/suptaparivartanasana.png'
  },
  {
    name: 'Supported Corpse Pose',
    sanskrit: 'Supported Savasana',
    level: 'beginner',
    short: 'Deep relaxation with support for ultimate rest.',
    alignmentCues: ['Let body soften', 'Support knees', 'Breathe naturally'],
    modifications: ['Use bolster under knees', 'Blanket under head'],
    safety: [],
    tags: ['restorative', 'supine', 'relaxation'],
    steps: [
      'Lie back with bolster under knees.',
      'Arms out, eyes closed.',
      'Relax for 10 minutes.'
    ],
    image: 'postures/supportedsavasana.png'
  },
  {
    name: 'Reclining Hero Pose',
    sanskrit: 'Supta Virasana',
    level: 'intermediate',
    short: 'Deep quad stretch, promotes relaxation.',
    alignmentCues: ['Sit between heels', 'Recline slowly', 'Keep spine long'],
    modifications: ['Use bolster under back', 'Keep knees slightly apart'],
    safety: ['Knee pain — avoid or use props', 'Lower back strain — reduce recline'],
    tags: ['restorative', 'supine', 'stretch'],
    steps: [
      'Sit between heels, lie back on bolster.',
      'Arms overhead.',
      'Hold 5 minutes.'
    ],
    image: 'postures/suptavirasana.png'
  },
  {
    name: 'Supported Fish Pose',
    sanskrit: 'Supported Matsyasana',
    level: 'beginner',
    short: 'Restorative chest opener, relieves tension.',
    alignmentCues: ['Block under upper back', 'Relax arms', 'Keep neck neutral'],
    modifications: ['Use rolled blanket instead of block', 'Keep knees bent'],
    safety: ['Neck pain — adjust head position', 'Avoid forcing chest lift'],
    tags: ['restorative', 'backbend', 'chest opener'],
    steps: [
      'Place block under upper back.',
      'Lie back, head down.',
      'Relax arms, hold 5-10 breaths.'
    ],
    image: 'postures/supportedmatsyasana.png'
  },
  {
    name: 'Wide Child’s Pose',
    sanskrit: 'Prasarita Balasana',
    level: 'beginner',
    short: 'Restorative pose, opens hips and relaxes back.',
    alignmentCues: ['Widen knees', 'Forehead to floor', 'Extend arms'],
    modifications: ['Use bolster under torso', 'Rest arms by sides'],
    safety: ['Knee discomfort — use padding', 'Avoid forcing stretch'],
    tags: ['restorative', 'stretch', 'relaxation'],
    steps: [
      'Kneel, spread knees wide, fold forward.',
      'Extend arms forward.',
      'Hold 5-10 breaths.'
    ],
    image: 'postures/prasaritabalasana.png'
  },
  {
    name: 'Cow Face Pose',
    sanskrit: 'Gomukhasana',
    level: 'intermediate',
    short: 'Hip and shoulder opener, improves posture.',
    alignmentCues: ['Stack knees', 'Lengthen spine', 'Clasp hands if possible'],
    modifications: ['Use strap for arm bind', 'Sit on blanket'],
    safety: ['Knee pain — use support', 'Shoulder strain — avoid bind'],
    tags: ['seated', 'hip opener', 'shoulder stretch'],
    steps: [
      'Sit, stack right knee over left, feet near hips.',
      'Raise right arm, bend elbow, reach hand down back.',
      'Reach left arm behind, clasp hands if possible.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/gomukhasana.png'
  },
  {
    name: 'Hero Pose',
    sanskrit: 'Virasana',
    level: 'beginner',
    short: 'Seated pose that stretches quads and ankles.',
    alignmentCues: ['Sit between heels', 'Lengthen spine', 'Hands on thighs'],
    modifications: ['Sit on block', 'Use blanket under shins'],
    safety: ['Knee pain — use props', 'Ankle discomfort — adjust position'],
    tags: ['seated', 'stretch', 'beginner'],
    steps: [
      'Kneel, sit between heels.',
      'Place hands on thighs, lengthen spine.',
      'Hold for 5-10 breaths.'
    ],
    image: 'postures/virasana.png'
  },
  {
    name: 'Accomplished Pose',
    sanskrit: 'Siddhasana',
    level: 'beginner',
    short: 'Seated meditation pose, opens hips.',
    alignmentCues: ['Heels near perineum', 'Lengthen spine', 'Hands on knees'],
    modifications: ['Sit on blanket', 'Use cross-legged position'],
    safety: ['Knee discomfort — use props', 'Avoid forcing heel placement'],
    tags: ['seated', 'meditation', 'beginner'],
    steps: [
      'Sit, place right heel near perineum, left heel over right.',
      'Rest hands on knees, palms up.',
      'Lengthen spine, hold for 1-5 minutes.'
    ],
    image: 'postures/siddhasana.png'
  },
  {
    name: 'Lotus Pose',
    sanskrit: 'Padmasana',
    level: 'intermediate',
    short: 'Classic meditation pose, deeply opens hips.',
    alignmentCues: ['Feet on thighs', 'Lengthen spine', 'Hands on knees'],
    modifications: ['Use half lotus', 'Sit on blanket'],
    safety: ['Knee pain — avoid forcing', 'Use props for support'],
    tags: ['seated', 'meditation', 'hip opener'],
    steps: [
      'Sit, place right foot on left thigh, left foot on right thigh.',
      'Rest hands on knees, palms up.',
      'Lengthen spine, hold for 1-5 minutes.'
    ],
    image: 'postures/padmasana.png'
  },
  {
    name: 'Half Lotus Pose',
    sanskrit: 'Ardha Padmasana',
    level: 'beginner',
    short: 'Preparatory pose for lotus, opens hips.',
    alignmentCues: ['One foot on thigh', 'Lengthen spine', 'Hands on knees'],
    modifications: ['Sit on blanket', 'Use cross-legged position'],
    safety: ['Knee pain — avoid forcing', 'Use props for comfort'],
    tags: ['seated', 'meditation', 'hip opener'],
    steps: [
      'Sit, place right foot on left thigh, left foot under right thigh.',
      'Rest hands on knees, palms up.',
      'Lengthen spine, hold for 5-10 breaths, switch sides.'
    ],
    image: 'postures/ardhapadmasana.png'
  },
  {
    name: 'Thread the Needle',
    sanskrit: 'Thread the Needle',
    level: 'beginner',
    short: 'Gentle shoulder and upper back stretch.',
    alignmentCues: ['Thread arm under body', 'Rest shoulder on floor', 'Keep hips square'],
    modifications: ['Use bolster under chest', 'Rest on forearm'],
    safety: ['Shoulder pain — reduce twist', 'Neck strain — keep neutral'],
    tags: ['supine', 'stretch', 'shoulder opener'],
    steps: [
      'Lie on back, thread right arm under body, rest shoulder on floor.',
      'Place right knee over left, twist gently.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/threadtheneedle.png'
  },
  {
    name: 'Supported Bridge Pose',
    sanskrit: 'Supported Setu Bandha Sarvangasana',
    level: 'beginner',
    short: 'Restorative backbend, opens chest, calms mind.',
    alignmentCues: ['Hips on block', 'Press feet evenly', 'Relax arms'],
    modifications: ['Use bolster instead of block', 'Keep feet wider'],
    safety: ['Lower back pain — adjust block height', 'Avoid over-lifting'],
    tags: ['restorative', 'backbend', 'relaxation'],
    steps: [
      'Lie on back, knees bent, feet flat.',
      'Place block under sacrum, lift hips.',
      'Relax arms, hold for 5-10 minutes.'
    ],
    image: 'postures/supportedsetubandhasana.png'
  },
  {
    name: 'Pigeon Pose',
    sanskrit: 'Eka Pada Rajakapotasana',
    level: 'intermediate',
    short: 'Deep hip opener, stretches thighs and groin.',
    alignmentCues: ['Square hips', 'Lengthen spine', 'Rest forehead if folding'],
    modifications: ['Use block under hip', 'Stay upright instead of folding'],
    safety: ['Knee pain — use support', 'Avoid forcing hips square'],
    tags: ['seated', 'hip opener', 'stretch'],
    steps: [
      'From all fours, bring right shin forward, left leg back.',
      'Square hips, fold forward over shin.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/ekapadarajakapotasana.png'
  },
  {
    name: 'Full Locust Pose',
    sanskrit: 'Shalabhasana B',
    level: 'intermediate',
    short: 'Strengthens entire back, improves posture.',
    alignmentCues: ['Lift chest and legs', 'Extend arms back', 'Keep neck neutral'],
    modifications: ['Lift one side at a time', 'Keep arms by sides'],
    safety: ['Lower back pain — reduce lift', 'Neck strain — gaze down'],
    tags: ['prone', 'backbend', 'strength'],
    steps: [
      'Lie face down, arms extended back.',
      'Lift chest, legs, and arms simultaneously.',
      'Hold 5 breaths.'
    ],
    image: 'postures/shalabhasanab.png'
  },
  {
    name: 'Four-Limbed Staff Pose',
    sanskrit: 'Chaturanga Dandasana',
    level: 'intermediate',
    short: 'Strengthens arms and core, builds endurance.',
    alignmentCues: ['Elbows over wrists', 'Keep body straight', 'Engage core'],
    modifications: ['Drop knees to floor', 'Lower halfway'],
    safety: ['Shoulder pain — keep elbows in', 'Wrist strain — use fists'],
    tags: ['prone', 'core', 'strength'],
    steps: [
      'From plank, lower body until elbows at 90 degrees.',
      'Keep body parallel to floor, elbows over wrists.',
      'Hold 5 breaths.'
    ],
    image: 'postures/chaturangadandasana.png'
  },
  {
    name: 'Warrior III',
    sanskrit: 'Virabhadrasana III',
    level: 'intermediate',
    short: 'Balancing pose that strengthens legs and core.',
    alignmentCues: ['Hips level', 'Extend arms forward', 'Lift back leg parallel'],
    modifications: ['Use wall for support', 'Keep hands at heart'],
    safety: ['Balance issues — use props', 'Avoid locking standing knee'],
    tags: ['balance', 'standing', 'strength'],
    steps: [
      'From standing, hinge forward, lift left leg back.',
      'Extend arms forward, body parallel to floor.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/virabhadrasana3.png'
  },
  {
    name: 'Revolved Half Moon Pose',
    sanskrit: 'Parivrtta Ardha Chandrasana',
    level: 'advanced',
    short: 'Twisting balance pose, strengthens core and legs.',
    alignmentCues: ['Twist from torso', 'Lift leg parallel', 'Keep hips level'],
    modifications: ['Use block under hand', 'Practice against wall'],
    safety: ['Balance issues — use support', 'Avoid over-twisting'],
    tags: ['balance', 'twist', 'advanced'],
    steps: [
      'From half moon, place left hand on floor, twist torso right.',
      'Extend right arm up, lift left leg parallel.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/parivrttaardhachandrasana.png'
  },
  {
    name: 'Ear Pressure Pose',
    sanskrit: 'Karnapidasana',
    level: 'intermediate',
    short: 'Inversion with deep spinal stretch, calms mind.',
    alignmentCues: ['Knees near ears', 'Support back', 'Keep neck neutral'],
    modifications: ['Use blocks under feet', 'Keep knees bent'],
    safety: ['Neck pain — use support', 'Avoid if high blood pressure'],
    tags: ['inversion', 'stretch', 'calming'],
    steps: [
      'From plow pose, bend knees toward ears.',
      'Rest knees on floor near head, hands supporting back.',
      'Hold 5 breaths.'
    ],
    image: 'postures/karnapidasana.png'
  }
]


# FILE: ./src/data/badgeDefinitions.ts

export interface BadgeDefinition {
  id: string
  name: string
  icon: string
  description: string
  category: 'practice' | 'streak' | 'achievement' | 'pose' | 'test' | 'gamification'
  howToEarn: string
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
}

export const BADGE_DEFINITIONS: BadgeDefinition[] = [
  { id: 'first_session',  name: 'First Step',       icon: '🌱', category: 'practice',     rarity: 'common',    description: 'Completed your first session',            howToEarn: 'Complete any yoga session' },
  { id: 'sessions_5',     name: 'Regular Visitor',  icon: '📅', category: 'practice',     rarity: 'common',    description: '5 sessions completed',                    howToEarn: 'Complete 5 sessions' },
  { id: 'sessions_10',    name: 'Steady Practice',  icon: '📿', category: 'practice',     rarity: 'common',    description: '10 sessions completed',                   howToEarn: 'Complete 10 sessions' },
  { id: 'sessions_50',    name: 'Yoga Warrior',     icon: '⚔️', category: 'practice',     rarity: 'rare',      description: '50 sessions completed',                   howToEarn: 'Complete 50 sessions' },
  { id: 'streak_3',       name: 'Consistent Yogi',  icon: '🔥', category: 'streak',       rarity: 'common',    description: '3-day practice streak',                   howToEarn: 'Practice 3 days in a row' },
  { id: 'streak_7',       name: 'Devoted Seeker',   icon: '⚡', category: 'streak',       rarity: 'rare',      description: '7-day practice streak',                   howToEarn: 'Practice 7 days in a row' },
  { id: 'streak_30',      name: 'Iron Will',        icon: '👑', category: 'streak',       rarity: 'legendary', description: '30-day practice streak',                  howToEarn: 'Practice 30 days in a row' },
  { id: 'xp_500',         name: 'Sapling',          icon: '🌿', category: 'gamification', rarity: 'common',    description: 'Earned 500 XP',                           howToEarn: 'Earn 500 total XP' },
  { id: 'xp_2000',        name: 'Banyan Tree',      icon: '🌳', category: 'gamification', rarity: 'rare',      description: 'Earned 2000 XP',                          howToEarn: 'Earn 2000 total XP' },
  { id: 'xp_5000',        name: 'Ancient Grove',    icon: '🏔️', category: 'gamification', rarity: 'epic',      description: 'Earned 5000 XP',                          howToEarn: 'Earn 5000 total XP' },
  { id: 'perfect_hold',   name: 'Pure Form',        icon: '✨', category: 'achievement',  rarity: 'rare',      description: 'Perfect hold on a pose',                  howToEarn: 'Average ≥88% match score on a hold' },
  { id: 'perfect_5',      name: 'Form Master',      icon: '💎', category: 'achievement',  rarity: 'epic',      description: '5 perfect holds across sessions',         howToEarn: 'Achieve 5 perfect holds' },
  { id: 'combo_3',        name: 'On Fire',          icon: '🌶️', category: 'gamification', rarity: 'common',    description: '3× pose combo',                           howToEarn: '3 poses in a row with ≥65% match' },
  { id: 'combo_5',        name: 'Flow State',       icon: '🌊', category: 'gamification', rarity: 'rare',      description: '5× pose combo',                           howToEarn: '5 poses in a row with ≥65% match' },
  { id: 'morning_5',      name: 'Dawn Warrior',     icon: '☀️', category: 'achievement',  rarity: 'rare',      description: '5 morning sessions (before 8 AM)',        howToEarn: 'Complete 5 sessions before 8:00 AM' },
  { id: 'all_categories', name: 'Explorer',         icon: '🗺️', category: 'achievement',  rarity: 'epic',      description: 'Practiced all pose categories',           howToEarn: 'Practice poses from 7+ categories' },
  { id: 'time_60min',     name: 'Hour Hero',        icon: '⏰', category: 'achievement',  rarity: 'common',    description: 'Total practice time: 1 hour',             howToEarn: 'Accumulate 60 minutes of practice' },
  { id: 'time_600min',    name: 'Zen Master',       icon: '🧘', category: 'achievement',  rarity: 'epic',      description: 'Total practice time: 10 hours',           howToEarn: 'Accumulate 600 minutes of practice' },
  { id: 'poses_100',      name: 'Pose Collector',   icon: '📖', category: 'pose',         rarity: 'rare',      description: 'Completed 100 poses across all sessions', howToEarn: 'Complete 100 poses total' },
]

export function getBadgeDef(id: string): BadgeDefinition | undefined {
  return BADGE_DEFINITIONS.find(b => b.id === id)
}

export const RARITY_COLORS: Record<string, string> = {
  common:    '#b38b59',
  rare:      '#4a90d9',
  epic:      '#9b59b6',
  legendary: '#f39c12',
}



# FILE: ./src/data/postures.json

[
  {
    "name": "Tadasana/Mountain Pose",
    "image": "postures/tadasana.png",
    "category": "Standing Poses",
    "benefits": [
      "Improves posture and alignment",
      "Enhances balance and body awareness",
      "Reduces stress and increases focus"
    ],
    "steps": [
      "Stand with feet together or hip-width apart, toes spread.",
      "Distribute weight evenly across both feet.",
      "Engage thighs, lift kneecaps, tuck tailbone slightly.",
      "Roll shoulders back and down, palms forward.",
      "Lengthen spine, gaze forward, breathe for 5-10 breaths."
    ],
    "bodyParts": [
      "legs",
      "ankles",
      "arms",
      "shoulders"
    ],
    "tags": [
      "standing",
      "beginner"
    ]
  },
  {
    "name": "Virabhadrasana I/Warrior I",
    "image": "postures/virabhadrasana1.png",
    "category": "Standing Poses",
    "benefits": [
      "Strengthens legs and hips",
      "Opens chest for better breathing",
      "Boosts stamina and concentration"
    ],
    "steps": [
      "Step left foot back 3-4 feet, turn out 45 degrees.",
      "Bend right knee to 90 degrees, align over ankle.",
      "Square hips forward, raise arms overhead, palms facing.",
      "Gaze upward or forward, hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "legs",
      "ankles",
      "core",
      "arms",
      "shoulders"
    ],
    "tags": [
      "standing",
      "strength",
      "beginner"
    ]
  },
  {
    "name": "Trikonasana/Triangle Pose",
    "image": "postures/trikonasana.png",
    "category": "Standing Poses",
    "benefits": [
      "Stretches torso, hips, and hamstrings",
      "Strengthens legs and core",
      "Aids digestion and relieves backache"
    ],
    "steps": [
      "Stand with feet 3-4 feet apart, right foot out 90 degrees, left at 45 degrees.",
      "Extend arms parallel to floor.",
      "Hinge at right hip, reach right hand to shin or floor, left arm up.",
      "Gaze at left hand, hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "legs",
      "ankles",
      "hamstrings",
      "back"
    ],
    "tags": [
      "standing",
      "forward-bend",
      "beginner",
      "flexibility"
    ]
  },
  {
    "name": "Utkatasana/Chair Pose",
    "image": "postures/utkatasana.png",
    "category": "Standing Poses",
    "benefits": [
      "Tones thighs, calves, and glutes",
      "Strengthens ankles and back",
      "Stimulates heart and circulation"
    ],
    "steps": [
      "Stand with feet together, bend knees as if sitting.",
      "Raise arms overhead, palms facing or touching.",
      "Sink hips back, keep chest lifted.",
      "Hold for 5-10 breaths, release."
    ],
    "bodyParts": [
      "legs",
      "ankles",
      "core",
      "arms",
      "shoulders"
    ],
    "tags": [
      "standing",
      "strength",
      "beginner"
    ]
  },
  {
    "name": "Parsvakonasana/Extended Side Angle Pose",
    "image": "postures/parsvakonasana.png",
    "category": "Standing Poses",
    "benefits": [
      "Stretches groin, chest, and shoulders",
      "Strengthens legs and ankles",
      "Improves stamina and relieves sciatica"
    ],
    "steps": [
      "From wide stance, turn right foot out, bend right knee over ankle.",
      "Place right forearm on thigh or hand on floor, extend left arm over ear.",
      "Rotate chest open, gaze up or forward.",
      "Hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "legs",
      "ankles",
      "arms",
      "shoulders"
    ],
    "tags": [
      "standing",
      "beginner"
    ]
  },
  {
    "name": "Parivrtta Trikonasana/Revolved Triangle Pose",
    "image": "postures/parivrtta_trikonasana2.png",
    "category": "Standing Poses",
    "benefits": [
      "Twists and stretches the spine",
      "Enhances balance and coordination",
      "Stimulates abdominal organs"
    ],
    "steps": [
      "From triangle stance, place left hand outside right foot.",
      "Twist torso, extend right arm up.",
      "Gaze at right hand, hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "legs",
      "ankles",
      "hamstrings",
      "back",
      "spine",
      "core"
    ],
    "tags": [
      "standing",
      "forward-bend",
      "twist",
      "beginner",
      "flexibility"
    ]
  },
  {
    "name": "Virabhadrasana II/Warrior II",
    "image": "postures/virabhadrasana2.png",
    "category": "Standing Poses",
    "benefits": [
      "Strengthens legs and core",
      "Opens hips and groin",
      "Enhances endurance and concentration"
    ],
    "steps": [
      "From wide stance, turn right foot out 90 degrees, left foot slightly in.",
      "Bend right knee over ankle, extend arms parallel to floor.",
      "Gaze over right hand, hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "legs",
      "ankles",
      "core",
      "arms",
      "shoulders"
    ],
    "tags": [
      "standing",
      "strength",
      "beginner"
    ]
  },
  {
    "name": "Parivrtta Parsvakonasana/Revolved Side Angle Pose",
    "image": "postures/parivrtta_parsvakonasana.png",
    "category": "Standing Poses",
    "benefits": [
      "Deepens spinal twist",
      "Improves balance and digestion",
      "Strengthens legs and core"
    ],
    "steps": [
      "From warrior II, place left elbow outside right knee.",
      "Press palms together, twist torso, gaze upward.",
      "Hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "legs",
      "ankles",
      "spine",
      "core",
      "arms",
      "shoulders"
    ],
    "tags": [
      "standing",
      "twist",
      "beginner"
    ]
  },
  {
    "name": "Prasarita Padottanasana/Wide-Legged Forward Bend",
    "image": "postures/prasarita_padottanasana.png",
    "category": "Standing Poses",
    "benefits": [
      "Stretches hamstrings and calves",
      "Calms the mind",
      "Improves balance and flexibility"
    ],
    "steps": [
      "Stand with feet wide apart, toes slightly in.",
      "Hinge at hips, bring head toward floor, hands on floor or blocks.",
      "Lengthen spine, hold for 5-10 breaths."
    ],
    "bodyParts": [
      "legs",
      "ankles",
      "hamstrings",
      "back"
    ],
    "tags": [
      "standing",
      "forward-bend",
      "beginner",
      "flexibility"
    ]
  },
  {
    "name": "Uttanasana/Standing Forward Bend",
    "image": "postures/uttanasana.png",
    "category": "Standing Poses",
    "benefits": [
      "Stretches hamstrings and back",
      "Calms the nervous system",
      "Relieves mild backache"
    ],
    "steps": [
      "Stand, hinge at hips, bring head toward floor.",
      "Place hands on floor or shins.",
      "Hold 5-10 breaths."
    ],
    "bodyParts": [
      "legs",
      "ankles",
      "hamstrings",
      "back"
    ],
    "tags": [
      "standing",
      "forward-bend",
      "beginner",
      "flexibility"
    ]
  },
  {
    "name": "Sukhasana/Easy Pose",
    "image": "postures/sukhasana.png",
    "category": "Seated Poses",
    "benefits": [
      "Opens hips and groin",
      "Strengthens back",
      "Calms mind and reduces anxiety"
    ],
    "steps": [
      "Sit on floor with legs crossed, shins parallel.",
      "Place hands on knees, palms up or down.",
      "Lengthen spine, relax shoulders.",
      "Close eyes, breathe deeply for 1-5 minutes."
    ],
    "bodyParts": [
      "hips"
    ],
    "tags": [
      "seated",
      "restorative",
      "beginner",
      "meditation",
      "breathing"
    ]
  },
  {
    "name": "Dandasana/Staff Pose",
    "image": "postures/dandasana.png",
    "category": "Seated Poses",
    "benefits": [
      "Strengthens back and core",
      "Stretches hamstrings",
      "Improves alignment and concentration"
    ],
    "steps": [
      "Sit with legs extended forward, feet flexed.",
      "Place hands beside hips, fingers forward.",
      "Lengthen spine, press thighs down.",
      "Hold for 5-10 breaths."
    ],
    "bodyParts": [
      "hips"
    ],
    "tags": [
      "seated",
      "beginner"
    ]
  },
  {
    "name": "Paschimottanasana/Seated Forward Bend",
    "image": "postures/paschimottanasana.png",
    "category": "Seated Poses",
    "benefits": [
      "Stretches spine, hamstrings, and calves",
      "Calms nervous system",
      "Aids digestion and relieves fatigue"
    ],
    "steps": [
      "Sit with legs extended, feet flexed.",
      "Inhale, lengthen spine; exhale, fold forward from hips.",
      "Reach hands to feet or shins.",
      "Hold for 5-10 breaths."
    ],
    "bodyParts": [
      "hips",
      "hamstrings",
      "back"
    ],
    "tags": [
      "seated",
      "forward-bend",
      "beginner",
      "flexibility"
    ]
  },
  {
    "name": "Baddha Konasana/Bound Angle Pose",
    "image": "postures/baddha_konasana.png",
    "category": "Seated Poses",
    "benefits": [
      "Opens hips and groin",
      "Stimulates abdominal organs",
      "Reduces menstrual discomfort"
    ],
    "steps": [
      "Sit with soles of feet together, knees out.",
      "Hold feet, lengthen spine.",
      "Gently press knees down with elbows if comfortable.",
      "Hold for 5-10 breaths."
    ],
    "bodyParts": [
      "hips"
    ],
    "tags": [
      "seated",
      "hip-opener",
      "beginner",
      "flexibility"
    ]
  },
  {
    "name": "Janu Sirsasana/Head-to-Knee Forward Bend",
    "image": "postures/janu_sirsasana.png",
    "category": "Seated Poses",
    "benefits": [
      "Stretches hamstrings and spine",
      "Calms mind",
      "Relieves headache and anxiety"
    ],
    "steps": [
      "Sit with right leg extended, left foot to inner right thigh.",
      "Inhale lengthen, exhale fold over right leg.",
      "Reach hands to foot or shin.",
      "Hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "hips",
      "hamstrings",
      "back",
      "shoulders",
      "arms",
      "core"
    ],
    "tags": [
      "seated",
      "forward-bend",
      "inversion",
      "beginner",
      "flexibility"
    ]
  },
  {
    "name": "Upavistha Konasana/Wide-Angle Seated Forward Bend",
    "image": "postures/upavistha_konasana.png",
    "category": "Seated Poses",
    "benefits": [
      "Stretches inner thighs and hamstrings",
      "Improves spinal flexibility",
      "Stimulates abdominal organs"
    ],
    "steps": [
      "Sit with legs spread wide, toes pointing up.",
      "Inhale, lengthen spine; exhale, fold forward from hips.",
      "Place hands on floor or reach for feet.",
      "Hold for 5-10 breaths."
    ],
    "bodyParts": [
      "hips",
      "hamstrings",
      "back"
    ],
    "tags": [
      "seated",
      "forward-bend",
      "beginner",
      "flexibility"
    ]
  },
  {
    "name": "Triang Mukhaikapada Paschimottanasana/Three-Limbed Forward Bend",
    "image": "postures/triang_mukhaikapada.png",
    "category": "Seated Poses",
    "benefits": [
      "Stretches hamstrings asymmetrically",
      "Improves spinal mobility",
      "Calms the nervous system"
    ],
    "steps": [
      "Sit with right leg bent, heel near pelvis, left leg extended.",
      "Inhale, lengthen spine; exhale, fold over left leg.",
      "Reach for foot or shin, hold for 5 breaths, switch sides."
    ],
    "bodyParts": [
      "hips",
      "hamstrings",
      "back"
    ],
    "tags": [
      "seated",
      "forward-bend",
      "beginner",
      "flexibility"
    ]
  },
  {
    "name": "Marichyasana I/Marichi’s Pose I",
    "image": "postures/marichyasana1.png",
    "category": "Seated Poses",
    "benefits": [
      "Twists and stretches spine",
      "Stimulates digestion",
      "Improves spinal flexibility"
    ],
    "steps": [
      "Sit with right leg bent, foot flat, left leg extended.",
      "Wrap right arm around right knee, left hand back.",
      "Twist right, hold for 5 breaths, switch sides."
    ],
    "bodyParts": [
      "hips",
      "spine",
      "core"
    ],
    "tags": [
      "seated",
      "twist"
    ]
  },
  {
    "name": "Marichyasana II/Marichi’s Pose II",
    "image": "postures/marichyasana2.png",
    "category": "Seated Poses",
    "benefits": [
      "Deep spinal twist with forward bend",
      "Stimulates abdominal organs",
      "Improves digestion"
    ],
    "steps": [
      "Sit with right leg in lotus, left leg bent, foot flat.",
      "Wrap left arm around left knee, right hand back.",
      "Twist left, hold for 5 breaths, switch sides."
    ],
    "bodyParts": [
      "hips",
      "spine",
      "core"
    ],
    "tags": [
      "seated",
      "twist"
    ]
  },
  {
    "name": "Marichyasana IV/Marichi’s Pose IV",
    "image": "postures/marichyasana4.png",
    "category": "Seated Poses",
    "benefits": [
      "Advanced binding pose",
      "Opens shoulders and hips",
      "Improves spinal mobility"
    ],
    "steps": [
      "Sit, right leg in lotus, left leg bent, foot flat.",
      "Wrap right arm around back, left arm around left knee.",
      "Twist left, hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "hips",
      "spine",
      "core"
    ],
    "tags": [
      "seated",
      "twist"
    ]
  },
  {
    "name": "Savasana/Corpse Pose",
    "image": "postures/savasana.png",
    "category": "Supine Poses",
    "benefits": [
      "Relaxes entire body",
      "Reduces stress and fatigue",
      "Improves sleep and mental clarity"
    ],
    "steps": [
      "Lie flat on back, legs apart, arms at sides, palms up.",
      "Close eyes, relax muscles.",
      "Breathe naturally for 5-10 minutes."
    ],
    "bodyParts": [
      "spine",
      "back"
    ],
    "tags": [
      "supine",
      "restorative",
      "beginner"
    ]
  },
  {
    "name": "Supta Baddha Konasana/Reclining Bound Angle Pose",
    "image": "postures/supta_baddha_konasana.png",
    "category": "Supine Poses",
    "benefits": [
      "Opens hips and chest",
      "Relieves lower back tension",
      "Promotes relaxation"
    ],
    "steps": [
      "Lie on back, soles together, knees out.",
      "Place arms at sides or overhead.",
      "Relax for 5-10 breaths."
    ],
    "bodyParts": [
      "spine",
      "back",
      "hips"
    ],
    "tags": [
      "supine",
      "restorative",
      "beginner",
      "hip-opener",
      "flexibility"
    ]
  },
  {
    "name": "Ananda Balasana/Happy Baby Pose",
    "image": "postures/ananda_balasana.png",
    "category": "Supine Poses",
    "benefits": [
      "Releases lower back and hips",
      "Stretches groin",
      "Calms mind and reduces stress"
    ],
    "steps": [
      "Lie on back, draw knees to chest.",
      "Grab outer feet, knees wide.",
      "Gently rock side to side, hold for 5 breaths."
    ],
    "bodyParts": [
      "spine",
      "back"
    ],
    "tags": [
      "supine",
      "restorative",
      "beginner"
    ]
  },
  {
    "name": "Viparita Karani/Legs-Up-The-Wall Pose",
    "image": "postures/viparita_karani.png",
    "category": "Supine Poses",
    "benefits": [
      "Relieves tired legs",
      "Calms nervous system",
      "Improves circulation"
    ],
    "steps": [
      "Sit next to wall, swing legs up wall.",
      "Lie back, hips close to wall.",
      "Arms at sides, relax for 5-10 minutes."
    ],
    "bodyParts": [
      "spine",
      "back"
    ],
    "tags": [
      "supine",
      "restorative",
      "beginner"
    ]
  },
  {
    "name": "Jathara Parivartanasana/Reclining Spinal Twist",
    "image": "postures/jathara_parivartanasana.png",
    "category": "Supine Poses",
    "benefits": [
      "Twists spine",
      "Aids digestion",
      "Relieves back tension"
    ],
    "steps": [
      "Lie on back, arms out in T.",
      "Draw knees to chest, drop to right.",
      "Gaze left, hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "spine",
      "back",
      "core"
    ],
    "tags": [
      "supine",
      "twist",
      "beginner"
    ]
  },
  {
    "name": "Supta Padangusthasana/Reclining Hand-to-Big-Toe Pose",
    "image": "postures/supta_padangusthasana.png",
    "category": "Supine Poses",
    "benefits": [
      "Stretches hamstrings and calves",
      "Improves flexibility",
      "Relieves lower back tension"
    ],
    "steps": [
      "Lie on back, lift right leg, hold big toe with right hand.",
      "Extend leg toward ceiling, keep left leg on floor.",
      "Hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "spine",
      "back"
    ],
    "tags": [
      "supine",
      "beginner"
    ]
  },
  {
    "name": "Bhujangasana/Cobra Pose",
    "image": "postures/bhujangasana.png",
    "category": "Prone Poses",
    "benefits": [
      "Strengthens back muscles",
      "Opens chest and shoulders",
      "Improves posture and digestion"
    ],
    "steps": [
      "Lie face down, hands under shoulders.",
      "Inhale, lift chest, keep elbows bent.",
      "Gaze forward, hold 5 breaths."
    ],
    "bodyParts": [
      "back",
      "core",
      "chest"
    ],
    "tags": [
      "prone",
      "backbend",
      "beginner"
    ]
  },
  {
    "name": "Salabhasana/Locust Pose",
    "image": "postures/salabhasana.png",
    "category": "Prone Poses",
    "benefits": [
      "Strengthens back, glutes, and legs",
      "Improves posture",
      "Stimulates abdominal organs"
    ],
    "steps": [
      "Lie face down, arms at sides.",
      "Inhale, lift head, chest, arms, and legs.",
      "Hold for 5 breaths."
    ],
    "bodyParts": [
      "back",
      "core",
      "arms"
    ],
    "tags": [
      "prone",
      "strength",
      "beginner"
    ]
  },
  {
    "name": "Dhanurasana/Bow Pose",
    "image": "postures/dhanurasana.png",
    "category": "Prone Poses",
    "benefits": [
      "Stretches front body",
      "Strengthens back",
      "Improves flexibility and energy"
    ],
    "steps": [
      "Lie face down, bend knees, grab ankles.",
      "Inhale, lift chest and thighs.",
      "Hold 5 breaths."
    ],
    "bodyParts": [
      "back",
      "core",
      "chest"
    ],
    "tags": [
      "prone",
      "backbend",
      "beginner"
    ]
  },
  {
    "name": "Makarasana/Crocodile Pose",
    "image": "postures/makarasana.png",
    "category": "Prone Poses",
    "benefits": [
      "Relaxes back",
      "Reduces stress",
      "Aids breathing"
    ],
    "steps": [
      "Lie face down, forehead on stacked hands.",
      "Legs apart, heels in.",
      "Breathe deeply for 5-10 minutes."
    ],
    "bodyParts": [
      "back",
      "core"
    ],
    "tags": [
      "prone",
      "restorative",
      "beginner"
    ]
  },
  {
    "name": "Ardha Shalabhasana/Half Locust Pose",
    "image": "postures/ardha_shalabhasana.png",
    "category": "Prone Poses",
    "benefits": [
      "Strengthens back asymmetrically",
      "Improves balance in back strength",
      "Enhances core stability"
    ],
    "steps": [
      "Lie face down.",
      "Lift right leg and left arm.",
      "Hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "back",
      "core",
      "arms"
    ],
    "tags": [
      "prone",
      "strength",
      "beginner"
    ]
  },
  {
    "name": "Vrksasana/Tree Pose",
    "image": "postures/vrksasana.png",
    "category": "Balancing Poses",
    "benefits": [
      "Strengthens legs and ankles",
      "Improves balance and concentration",
      "Calms mind"
    ],
    "steps": [
      "Stand, shift weight to left foot.",
      "Place right foot on inner left thigh or calf.",
      "Hands to heart or overhead.",
      "Hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "legs",
      "core",
      "ankles"
    ],
    "tags": [
      "balance",
      "intermediate"
    ]
  },
  {
    "name": "Garudasana/Eagle Pose",
    "image": "postures/garudasana.png",
    "category": "Balancing Poses",
    "benefits": [
      "Stretches shoulders and hips",
      "Strengthens legs",
      "Improves focus and detoxification"
    ],
    "steps": [
      "Stand, cross right thigh over left, hook foot if possible.",
      "Cross left arm over right, bend elbows, palms together.",
      "Bend standing knee, hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "legs",
      "core",
      "ankles",
      "shoulders"
    ],
    "tags": [
      "balance",
      "shoulder-opener",
      "intermediate"
    ]
  },
  {
    "name": "Vasisthasana/Side Plank Pose",
    "image": "postures/vasisthasana.png",
    "category": "Balancing Poses",
    "benefits": [
      "Strengthens arms, wrists, and core",
      "Improves balance and endurance",
      "Enhances coordination"
    ],
    "steps": [
      "From plank, shift to right hand and outer foot.",
      "Stack left foot on right, raise left arm.",
      "Hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "legs",
      "core",
      "ankles",
      "arms"
    ],
    "tags": [
      "balance",
      "strength",
      "intermediate"
    ]
  },
  {
    "name": "Bakasana/Crow Pose",
    "image": "postures/bakasana.png",
    "category": "Balancing Poses",
    "benefits": [
      "Strengthens arms and wrists",
      "Tones core",
      "Builds confidence"
    ],
    "steps": [
      "Squat, place hands on floor shoulder-width.",
      "Bend elbows, place knees on upper arms.",
      "Lift feet, balance on hands, hold 5 breaths."
    ],
    "bodyParts": [
      "legs",
      "core",
      "ankles"
    ],
    "tags": [
      "balance",
      "intermediate"
    ]
  },
  {
    "name": "Natarajasana/Dancer's Pose",
    "image": "postures/natarajasana.png",
    "category": "Balancing Poses",
    "benefits": [
      "Stretches quads and shoulders",
      "Improves balance and flexibility",
      "Strengthens legs and back"
    ],
    "steps": [
      "Stand, grab right ankle with right hand.",
      "Extend left arm forward, kick foot into hand.",
      "Hinge forward, hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "legs",
      "core",
      "ankles",
      "arms",
      "shoulders"
    ],
    "tags": [
      "balance",
      "intermediate"
    ]
  },
  {
    "name": "Parsva Bakasana/Side Crow Pose",
    "image": "postures/parsva_bakasana.png",
    "category": "Balancing Poses",
    "benefits": [
      "Strengthens arms and core",
      "Improves balance and coordination",
      "Enhances spinal twist"
    ],
    "steps": [
      "Squat, twist torso to right, place hands on floor.",
      "Place knees on left upper arm, bend elbows.",
      "Lift feet, balance, hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "legs",
      "core",
      "ankles"
    ],
    "tags": [
      "balance",
      "intermediate"
    ]
  },
  {
    "name": "Kakasana/Crow Pose (Knees Bent)",
    "image": "postures/kakasana.png",
    "category": "Balancing Poses",
    "benefits": [
      "Builds arm strength",
      "Improves wrist flexibility",
      "Enhances focus and coordination"
    ],
    "steps": [
      "Squat, place hands on floor shoulder-width.",
      "Bend elbows, place knees on upper arms, keep knees bent.",
      "Lift feet, balance, hold 5 breaths."
    ],
    "bodyParts": [
      "legs",
      "core",
      "ankles"
    ],
    "tags": [
      "balance",
      "intermediate"
    ]
  },
  {
    "name": "Tulasana/Scale Pose",
    "image": "postures/tulasana.png",
    "category": "Balancing Poses",
    "benefits": [
      "Strengthens arms and core",
      "Improves balance",
      "Enhances wrist strength"
    ],
    "steps": [
      "Sit in lotus or cross-legged, place hands beside hips.",
      "Press hands down, lift hips and legs off floor.",
      "Balance, hold for 5 breaths."
    ],
    "bodyParts": [
      "legs",
      "core",
      "ankles",
      "arms"
    ],
    "tags": [
      "balance",
      "strength",
      "intermediate"
    ]
  },
  {
    "name": "Eka Pada Galavasana/Flying Pigeon Pose",
    "image": "postures/eka_pada_galavasana.png",
    "category": "Balancing Poses",
    "benefits": [
      "Builds advanced arm strength",
      "Opens hips",
      "Improves balance and focus"
    ],
    "steps": [
      "Stand, place right shin over left upper arm.",
      "Bend elbows, lean forward, extend left leg back.",
      "Balance on hands, hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "legs",
      "core",
      "ankles",
      "back",
      "chest",
      "hips"
    ],
    "tags": [
      "balance",
      "backbend",
      "hip-opener",
      "intermediate",
      "flexibility"
    ]
  },
  {
    "name": "Ardha Chandrasana/Half Moon Pose",
    "image": "postures/ardha_chandrasana.png",
    "category": "Balancing Poses",
    "benefits": [
      "Improves balance",
      "Stretches groin and hamstrings",
      "Strengthens legs and core"
    ],
    "steps": [
      "From triangle, bend right knee, place right hand on floor.",
      "Lift left leg parallel to floor, extend left arm up.",
      "Gaze at floor or up, hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "legs",
      "core",
      "ankles"
    ],
    "tags": [
      "balance",
      "intermediate"
    ]
  },
  {
    "name": "Adho Mukha Svanasana/Downward-Facing Dog",
    "image": "postures/adho_mukha_svanasana.png",
    "category": "Inversions",
    "benefits": [
      "Stretches hamstrings, calves, and spine",
      "Strengthens arms and shoulders",
      "Relieves stress"
    ],
    "steps": [
      "From hands and knees, lift hips up and back.",
      "Hands shoulder-width, feet hip-width.",
      "Press chest toward thighs, hold 5 breaths."
    ],
    "bodyParts": [
      "shoulders",
      "arms",
      "core",
      "spine"
    ],
    "tags": [
      "inversion",
      "advanced"
    ]
  },
  {
    "name": "Sarvangasana/Shoulder Stand",
    "image": "postures/sarvangasana.png",
    "category": "Inversions",
    "benefits": [
      "Stimulates thyroid",
      "Improves digestion",
      "Calms brain"
    ],
    "steps": [
      "Lie on back, lift legs overhead.",
      "Support lower back with hands, elbows on floor.",
      "Extend legs up, hold 5-10 breaths."
    ],
    "bodyParts": [
      "shoulders",
      "arms",
      "core",
      "spine"
    ],
    "tags": [
      "inversion",
      "advanced"
    ]
  },
  {
    "name": "Halasana/Plow Pose",
    "image": "postures/halasana.png",
    "category": "Inversions",
    "benefits": [
      "Stretches spine and shoulders",
      "Calms nervous system",
      "Aids sleep"
    ],
    "steps": [
      "From shoulder stand, lower toes to floor behind head.",
      "Hands interlocked or supporting back.",
      "Hold 5 breaths."
    ],
    "bodyParts": [
      "shoulders",
      "arms",
      "core",
      "spine"
    ],
    "tags": [
      "inversion",
      "advanced"
    ]
  },
  {
    "name": "Sirsasana/Headstand",
    "image": "postures/sirsasana.png",
    "category": "Inversions",
    "benefits": [
      "Increases blood flow to brain",
      "Strengthens shoulders",
      "Builds focus"
    ],
    "steps": [
      "Kneel, interlace fingers, place crown on floor.",
      "Lift knees, walk feet in.",
      "Lift legs up, balance, hold 5-10 breaths."
    ],
    "bodyParts": [
      "shoulders",
      "arms",
      "core",
      "spine"
    ],
    "tags": [
      "inversion",
      "advanced"
    ]
  },
  {
    "name": "Pincha Mayurasana/Forearm Stand",
    "image": "postures/pincha_mayurasana.png",
    "category": "Inversions",
    "benefits": [
      "Strengthens arms and core",
      "Improves balance",
      "Opens shoulders"
    ],
    "steps": [
      "Forearms on floor, elbows under shoulders.",
      "Walk feet in, lift one leg, then both.",
      "Balance, hold 5 breaths."
    ],
    "bodyParts": [
      "shoulders",
      "arms",
      "core",
      "spine"
    ],
    "tags": [
      "inversion",
      "advanced"
    ]
  },
  {
    "name": "Adho Mukha Vrksasana/Handstand",
    "image": "postures/adho_mukha_vrksasana.png",
    "category": "Inversions",
    "benefits": [
      "Builds upper body strength",
      "Improves balance",
      "Strengthens core and shoulders"
    ],
    "steps": [
      "Place hands shoulder-width on floor, facing wall.",
      "Kick one leg up, then the other, balance against wall.",
      "Keep arms straight, hold for 5-10 breaths."
    ],
    "bodyParts": [
      "shoulders",
      "arms",
      "core",
      "spine"
    ],
    "tags": [
      "inversion",
      "advanced"
    ]
  },
  {
    "name": "Setu Bandha Sarvangasana/Bridge Pose",
    "image": "postures/setu_bandha_sarvangasana.png",
    "category": "Backbends",
    "benefits": [
      "Strengthens back and glutes",
      "Opens chest",
      "Relieves fatigue"
    ],
    "steps": [
      "Lie on back, knees bent, feet flat.",
      "Lift hips, interlace hands under back.",
      "Hold 5 breaths."
    ],
    "bodyParts": [
      "back",
      "chest",
      "shoulders",
      "arms",
      "core"
    ],
    "tags": [
      "backbend",
      "inversion",
      "intermediate"
    ]
  },
  {
    "name": "Ustrasana/Camel Pose",
    "image": "postures/ustrasana.png",
    "category": "Backbends",
    "benefits": [
      "Stretches front body",
      "Improves posture",
      "Boosts mood"
    ],
    "steps": [
      "Kneel, hands on lower back.",
      "Arch back, reach for heels.",
      "Head back if comfortable, hold 5 breaths."
    ],
    "bodyParts": [
      "back",
      "chest",
      "shoulders",
      "arms"
    ],
    "tags": [
      "backbend",
      "intermediate"
    ]
  },
  {
    "name": "Urdhva Dhanurasana/Wheel Pose",
    "image": "postures/urdhva_dhanurasana.png",
    "category": "Backbends",
    "benefits": [
      "Strengthens arms and legs",
      "Opens heart",
      "Increases vitality"
    ],
    "steps": [
      "Lie on back, hands by ears, feet flat.",
      "Press up, straighten arms and legs.",
      "Hold 5 breaths."
    ],
    "bodyParts": [
      "back",
      "chest",
      "shoulders"
    ],
    "tags": [
      "backbend",
      "advanced"
    ]
  },
  {
    "name": "Matsyasana/Fish Pose",
    "image": "postures/matsyasana.png",
    "category": "Backbends",
    "benefits": [
      "Opens throat and chest",
      "Relieves respiratory issues",
      "Stretches neck"
    ],
    "steps": [
      "Lie on back, legs extended.",
      "Lift chest, place crown on floor.",
      "Hands under hips, hold 5 breaths."
    ],
    "bodyParts": [
      "back",
      "chest",
      "shoulders"
    ],
    "tags": [
      "backbend",
      "intermediate"
    ]
  },
  {
    "name": "Sphuxtasana/Sphinx Pose",
    "image": "postures/sphuxtasana.png",
    "category": "Backbends",
    "benefits": [
      "Gentle back strength",
      "Opens chest",
      "Improves posture"
    ],
    "steps": [
      "Lie prone, forearms on floor.",
      "Lift chest, gaze forward.",
      "Hold 5 breaths."
    ],
    "bodyParts": [
      "back",
      "chest",
      "shoulders"
    ],
    "tags": [
      "backbend",
      "restorative",
      "prone",
      "beginner"
    ]
  },
  {
    "name": "Urdhva Mukha Svanasana/Upward-Facing Dog",
    "image": "postures/urdhva_mukha_svanasana.png",
    "category": "Backbends",
    "benefits": [
      "Opens chest and shoulders",
      "Strengthens arms and wrists",
      "Improves spinal flexibility"
    ],
    "steps": [
      "Lie prone, hands under shoulders.",
      "Press up, straighten arms, lift thighs off floor.",
      "Gaze forward, hold 5 breaths."
    ],
    "bodyParts": [
      "back",
      "chest",
      "shoulders"
    ],
    "tags": [
      "backbend",
      "intermediate"
    ]
  },
  {
    "name": "Kapotasana/Pigeon Pose (Backbend)",
    "image": "postures/kapotasana.png",
    "category": "Backbends",
    "benefits": [
      "Advanced backbend",
      "Opens chest and hips",
      "Improves spinal flexibility"
    ],
    "steps": [
      "Kneel, lean back, place hands near feet.",
      "Arch back, bring head toward feet.",
      "Hold 5 breaths."
    ],
    "bodyParts": [
      "back",
      "chest",
      "shoulders",
      "hips"
    ],
    "tags": [
      "backbend",
      "hip-opener",
      "advanced",
      "flexibility"
    ]
  },
  {
    "name": "Bharadvajasana/Bharadvaja's Twist",
    "image": "postures/bharadvajasana.png",
    "category": "Twists",
    "benefits": [
      "Twists spine",
      "Relieves backache",
      "Improves flexibility"
    ],
    "steps": [
      "Sit with legs extended, bend knees to left.",
      "Twist right, hand behind, left on knee.",
      "Hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "spine",
      "core"
    ],
    "tags": [
      "twist",
      "beginner"
    ]
  },
  {
    "name": "Ardha Matsyendrasana/Half Lord of the Fishes",
    "image": "postures/ardha_matsyendrasana.png",
    "category": "Twists",
    "benefits": [
      "Massages organs",
      "Stretches hips",
      "Energizes spine"
    ],
    "steps": [
      "Sit, right foot over left thigh.",
      "Twist left, elbow outside right knee.",
      "Hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "spine",
      "core",
      "back",
      "chest"
    ],
    "tags": [
      "twist",
      "backbend",
      "intermediate"
    ]
  },
  {
    "name": "Parivrtta Trikonasana/Revolved Triangle",
    "image": "postures/parivrtta_trikonasana.png",
    "category": "Twists",
    "benefits": [
      "Twists torso",
      "Strengthens legs",
      "Improves balance"
    ],
    "steps": [
      "From triangle, place left hand outside right foot.",
      "Twist, right arm up.",
      "Hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "spine",
      "core",
      "hamstrings",
      "back"
    ],
    "tags": [
      "twist",
      "forward-bend",
      "intermediate",
      "flexibility"
    ]
  },
  {
    "name": "Marichyasana III/Marichi's Pose",
    "image": "postures/marichyasana3.png",
    "category": "Twists",
    "benefits": [
      "Deep spinal twist",
      "Stretches shoulders",
      "Stimulates digestion"
    ],
    "steps": [
      "Sit, bend right knee, foot flat.",
      "Twist left, elbow outside knee.",
      "Hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "spine",
      "core"
    ],
    "tags": [
      "twist",
      "intermediate"
    ]
  },
  {
    "name": "Supta Parivartanasana/Reclining Twist",
    "image": "postures/supta_parivartanasana.png",
    "category": "Twists",
    "benefits": [
      "Gentle detox",
      "Relaxes back",
      "Aids digestion"
    ],
    "steps": [
      "Lie back, knees to chest.",
      "Drop knees right, arms out.",
      "Hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "spine",
      "core"
    ],
    "tags": [
      "twist",
      "beginner"
    ]
  },
  {
    "name": "Balasana/Child's Pose",
    "image": "postures/balasana.png",
    "category": "Restorative Poses",
    "benefits": [
      "Relaxes back and hips",
      "Calms mind",
      "Relieves stress"
    ],
    "steps": [
      "Kneel, sit on heels.",
      "Fold forward, arms extended.",
      "Forehead to floor, hold 5-10 breaths."
    ],
    "bodyParts": [
      "full-body"
    ],
    "tags": [
      "restorative",
      "beginner"
    ]
  },
  {
    "name": "Supported Savasana/Supported Corpse Pose",
    "image": "postures/supported_savasana.png",
    "category": "Restorative Poses",
    "benefits": [
      "Deep relaxation",
      "Supports recovery",
      "Reduces stress"
    ],
    "steps": [
      "Lie back with bolster under knees.",
      "Arms out, eyes closed.",
      "Relax for 10 minutes."
    ],
    "bodyParts": [
      "full-body"
    ],
    "tags": [
      "restorative",
      "beginner"
    ]
  },
  {
    "name": "Supta Virasana/Reclining Hero Pose",
    "image": "postures/supta_virasana.png",
    "category": "Restorative Poses",
    "benefits": [
      "Stretches quads",
      "Opens chest",
      "Promotes relaxation"
    ],
    "steps": [
      "Sit between heels, lie back on bolster.",
      "Arms overhead.",
      "Hold 5 minutes."
    ],
    "bodyParts": [
      "full-body"
    ],
    "tags": [
      "restorative",
      "beginner"
    ]
  },
  {
    "name": "Supported Matsyasana/Supported Fish Pose",
    "image": "postures/supported_matsyasana.png",
    "category": "Restorative Poses",
    "benefits": [
      "Opens chest",
      "Relieves tension",
      "Calms nervous system"
    ],
    "steps": [
      "Place block under upper back.",
      "Lie back, head down.",
      "Relax arms, hold 5-10 breaths."
    ],
    "bodyParts": [
      "full-body",
      "back",
      "chest"
    ],
    "tags": [
      "restorative",
      "backbend",
      "beginner"
    ]
  },
  {
    "name": "Prasarita Balasana/Wide Child's Pose",
    "image": "postures/prasarita_balasana.png",
    "category": "Restorative Poses",
    "benefits": [
      "Opens hips",
      "Promotes relaxation",
      "Relieves stress"
    ],
    "steps": [
      "Kneel, spread knees wide, fold forward.",
      "Extend arms forward.",
      "Hold 5-10 breaths."
    ],
    "bodyParts": [
      "full-body",
      "hamstrings",
      "back"
    ],
    "tags": [
      "restorative",
      "forward-bend",
      "beginner",
      "flexibility"
    ]
  },
  {
    "name": "Gomukhasana/Cow Face Pose",
    "image": "postures/gomukhasana.png",
    "category": "Seated Poses",
    "benefits": [
      "Stretches hips and shoulders",
      "Improves posture",
      "Relieves tension"
    ],
    "steps": [
      "Sit, stack right knee over left, feet near hips.",
      "Raise right arm, bend elbow, reach hand down back.",
      "Reach left arm behind, clasp hands if possible.",
      "Hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "hips",
      "shoulders"
    ],
    "tags": [
      "seated",
      "hip-opener",
      "shoulder-opener",
      "beginner",
      "flexibility"
    ]
  },
  {
    "name": "Virasana/Hero Pose",
    "image": "postures/virasana.png",
    "category": "Seated Poses",
    "benefits": [
      "Stretches quads and ankles",
      "Improves digestion",
      "Enhances posture"
    ],
    "steps": [
      "Kneel, sit between heels.",
      "Place hands on thighs, lengthen spine.",
      "Hold for 5-10 breaths."
    ],
    "bodyParts": [
      "hips"
    ],
    "tags": [
      "seated",
      "restorative",
      "beginner"
    ]
  },
  {
    "name": "Siddhasana/Accomplished Pose",
    "image": "postures/siddhasana.png",
    "category": "Seated Poses",
    "benefits": [
      "Opens hips",
      "Promotes meditation",
      "Calms mind"
    ],
    "steps": [
      "Sit, place right heel near perineum, left heel over right.",
      "Rest hands on knees, palms up.",
      "Lengthen spine, hold for 1-5 minutes."
    ],
    "bodyParts": [
      "hips"
    ],
    "tags": [
      "seated",
      "meditation",
      "breathing",
      "beginner"
    ]
  },
  {
    "name": "Padmasana/Lotus Pose",
    "image": "postures/padmasana.png",
    "category": "Seated Poses",
    "benefits": [
      "Opens hips",
      "Enhances meditation",
      "Calms nervous system"
    ],
    "steps": [
      "Sit, place right foot on left thigh, left foot on right thigh.",
      "Rest hands on knees, palms up.",
      "Lengthen spine, hold for 1-5 minutes."
    ],
    "bodyParts": [
      "hips"
    ],
    "tags": [
      "seated",
      "meditation",
      "breathing",
      "beginner"
    ]
  },
  {
    "name": "Ardha Padmasana/Half Lotus Pose",
    "image": "postures/ardha_padmasana.png",
    "category": "Seated Poses",
    "benefits": [
      "Stretches hips",
      "Prepares for full lotus",
      "Calms mind"
    ],
    "steps": [
      "Sit, place right foot on left thigh, left foot under right thigh.",
      "Rest hands on knees, palms up.",
      "Lengthen spine, hold for 5-10 breaths, switch sides."
    ],
    "bodyParts": [
      "hips"
    ],
    "tags": [
      "seated",
      "meditation",
      "breathing",
      "beginner"
    ]
  },
  {
    "name": "Thread the Needle/Threaded Needle Pose",
    "image": "postures/thread_the_needle.png",
    "category": "Supine Poses",
    "benefits": [
      "Stretches upper back and shoulders",
      "Relieves tension",
      "Promotes relaxation"
    ],
    "steps": [
      "Lie on back, thread right arm under body, rest shoulder on floor.",
      "Place right knee over left, twist gently.",
      "Hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "spine",
      "back",
      "shoulders"
    ],
    "tags": [
      "supine",
      "shoulder-opener",
      "beginner"
    ]
  },
  {
    "name": "Setu Bandha Sarvangasana/Supported Bridge Pose",
    "image": "postures/supported_setu_bandhasana.png",
    "category": "Restorative Poses",
    "benefits": [
      "Gentle backbend",
      "Opens chest",
      "Calms nervous system"
    ],
    "steps": [
      "Lie on back, knees bent, feet flat.",
      "Place block under sacrum, lift hips.",
      "Relax arms, hold for 5-10 minutes."
    ],
    "bodyParts": [
      "full-body",
      "back",
      "chest",
      "shoulders",
      "arms",
      "core"
    ],
    "tags": [
      "restorative",
      "backbend",
      "beginner",
      "inversion"
    ]
  },
  {
    "name": "Eka Pada Rajakapotasana/Pigeon Pose",
    "image": "postures/eka_pada_rajakapotasana.png",
    "category": "Seated Poses",
    "benefits": [
      "Opens hips and groin",
      "Stretches thighs",
      "Relieves lower back tension"
    ],
    "steps": [
      "From all fours, bring right shin forward, left leg back.",
      "Square hips, fold forward over shin.",
      "Hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "hips",
      "back",
      "chest"
    ],
    "tags": [
      "seated",
      "backbend",
      "hip-opener",
      "beginner",
      "flexibility"
    ]
  },
  {
    "name": "Shalabhasana B/Full Locust Pose",
    "image": "postures/shalabhasana_b.png",
    "category": "Prone Poses",
    "benefits": [
      "Strengthens entire back",
      "Improves posture",
      "Stimulates abdominal organs"
    ],
    "steps": [
      "Lie face down, arms extended back.",
      "Lift chest, legs, and arms simultaneously.",
      "Hold 5 breaths."
    ],
    "bodyParts": [
      "back",
      "core",
      "arms"
    ],
    "tags": [
      "prone",
      "strength"
    ]
  },
  {
    "name": "Chaturanga Dandasana/Four-Limbed Staff Pose",
    "image": "postures/chaturanga_dandasana.png",
    "category": "Prone Poses",
    "benefits": [
      "Strengthens arms and core",
      "Improves stability",
      "Enhances endurance"
    ],
    "steps": [
      "From plank, lower body until elbows at 90 degrees.",
      "Keep body parallel to floor, elbows over wrists.",
      "Hold 5 breaths."
    ],
    "bodyParts": [
      "back",
      "core",
      "arms"
    ],
    "tags": [
      "prone",
      "strength",
      "beginner"
    ]
  },
  {
    "name": "Parighasana/Gate Pose",
    "image": "postures/parighasana.png",
    "category": "Standing Poses",
    "benefits": [
      "Stretches side body and hamstrings",
      "Opens chest",
      "Improves flexibility"
    ],
    "steps": [
      "Kneel, extend right leg to side, toes pointing right.",
      "Reach right arm to right foot, left arm over ear.",
      "Hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "legs",
      "ankles"
    ],
    "tags": [
      "standing",
      "restorative",
      "beginner"
    ]
  },
  {
    "name": "Anjaneyasana/Low Lunge",
    "image": "postures/anjaneyasana.png",
    "category": "Standing Poses",
    "benefits": [
      "Stretches hips and quads",
      "Strengthens legs",
      "Improves balance"
    ],
    "steps": [
      "From lunge, lower left knee to floor, right knee over ankle.",
      "Raise arms overhead, arch back slightly.",
      "Hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "legs",
      "ankles",
      "hips",
      "arms",
      "shoulders"
    ],
    "tags": [
      "standing",
      "hip-opener",
      "beginner"
    ]
  },
  {
    "name": "Virabhadrasana III/Warrior III",
    "image": "postures/virabhadrasana3.png",
    "category": "Balancing Poses",
    "benefits": [
      "Builds balance and core strength",
      "Strengthens legs and back",
      "Improves concentration"
    ],
    "steps": [
      "From standing, hinge forward, lift left leg back.",
      "Extend arms forward, body parallel to floor.",
      "Hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "legs",
      "core",
      "ankles",
      "arms",
      "shoulders"
    ],
    "tags": [
      "balance",
      "strength",
      "intermediate"
    ]
  },
  {
    "name": "Parivrtta Ardha Chandrasana/Revolved Half Moon Pose",
    "image": "postures/parivrtta_ardha_chandrasana.png",
    "category": "Balancing Poses",
    "benefits": [
      "Improves balance and spinal twist",
      "Strengthens core and legs",
      "Enhances coordination"
    ],
    "steps": [
      "From half moon, place left hand on floor, twist torso right.",
      "Extend right arm up, lift left leg parallel.",
      "Hold 5 breaths, switch sides."
    ],
    "bodyParts": [
      "legs",
      "core",
      "ankles",
      "spine"
    ],
    "tags": [
      "balance",
      "twist",
      "advanced"
    ]
  },
  {
    "name": "Karnapidasana/Ear Pressure Pose",
    "image": "postures/karnapidasana.png",
    "category": "Inversions",
    "benefits": [
      "Stretches spine and shoulders",
      "Calms mind",
      "Stimulates thyroid"
    ],
    "steps": [
      "From plow pose, bend knees toward ears.",
      "Rest knees on floor near head, hands supporting back.",
      "Hold 5 breaths."
    ],
    "bodyParts": [
      "shoulders",
      "arms",
      "core",
      "spine"
    ],
    "tags": [
      "inversion",
      "advanced"
    ]
  }
]



# FILE: ./scripts/generate_sample_posture_image.py

import matplotlib.pyplot as plt
import matplotlib.patches as patches

def draw_stick_figure(ax):
    # Head
    head = patches.Circle((0.5, 0.8), 0.05, fill=False, linewidth=3)
    ax.add_patch(head)
    # Body
    ax.plot([0.5, 0.5], [0.7, 0.5], color='black', linewidth=3)
    # Arms
    ax.plot([0.3, 0.7], [0.65, 0.65], color='black', linewidth=3)
    # Legs
    ax.plot([0.5, 0.35], [0.5, 0.3], color='black', linewidth=3)
    ax.plot([0.5, 0.65], [0.5, 0.3], color='black', linewidth=3)

def generate_posture_image(posture_name, filename):
    fig, ax = plt.subplots(figsize=(2, 3))
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.axis('off')

    draw_stick_figure(ax)

    # Add posture name text below the figure
    plt.text(0.5, 0.1, posture_name, fontsize=12, ha='center', va='center', fontweight='bold')

    plt.savefig(filename, bbox_inches='tight', transparent=True)
    plt.close()

if __name__ == "__main__":
    sample_posture = "Tadasana"
    output_file = "projects/Yoga/postures/sample_tadasana.png"
    generate_posture_image(sample_posture, output_file)
    print(f"Sample image generated: {output_file}")


