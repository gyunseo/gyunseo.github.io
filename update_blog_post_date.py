import os


def update_datetime_in_file(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        lines = file.readlines()

    with open(file_path, "w", encoding="utf-8") as file:
        for line in lines:
            if line.strip().startswith("pubDatetime:") or line.strip().startswith(
                "modDatetime:"
            ):
                # 'Z'를 찾아 '+09:00'으로 대체
                line = line.replace("Z", "+09:00")
            file.write(line)


def update_all_markdown_files(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".md"):
                file_path = os.path.join(root, file)
                update_datetime_in_file(file_path)
                print(f"Updated {file_path}")


# 'blog/' 디렉토리를 변경하고 싶은 경우 아래 경로를 수정하세요
update_all_markdown_files("./src/content/blog/")
