import sys
import time
from pathlib import Path
from PIL import Image

def main():
    if len(sys.argv) < 2:
        print("Usage: python predict.py <input_image>")
        sys.exit(1)

    input_path = Path(sys.argv[1])
    if not input_path.exists():
        print(f"File not found: {input_path}")
        sys.exit(1)


    time.sleep(2)


    output_path = Path("uploads") / f"predicted_{input_path.name}"
    img = Image.new('RGB', (256, 256), color='green')  
    img.save(output_path)

    print(str(output_path))

if __name__ == "__main__":
    main()
