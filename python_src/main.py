from pathlib import Path
from md_parser import md_parser

def main():
    # 実行ファイルと同じ階層にある"Sample.md"をパース
    md_path=Path(__file__).parent / "Sample.md"
    md_parser.parse_md_to_html(md_path,svg=True)

if __name__ == "__main__":
    main()