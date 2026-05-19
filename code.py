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
