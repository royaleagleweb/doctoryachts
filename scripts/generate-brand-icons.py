#!/usr/bin/env python3
"""Generate Doctor Yachts DY wordmark favicon / app icons (text only, no yacht)."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
APP = ROOT / "src" / "app"
PUBLIC = ROOT / "public"

BG = (11, 13, 16, 255)  # near-black
GOLD = (201, 162, 74, 255)  # #C9A24A
WHITE = (255, 255, 255, 255)
FONT_PATH = "/usr/share/fonts/truetype/macos/Inter-Bold.ttf"


def draw_mark(size: int) -> Image.Image:
    img = Image.new("RGBA", (size, size), BG)
    draw = ImageDraw.Draw(img)

    # Slim dark margin outside a thin gold frame
    margin = max(2, round(size * 0.055))
    frame = max(1, round(size * 0.028))
    inset = margin
    draw.rectangle(
        [inset, inset, size - inset - 1, size - inset - 1],
        outline=GOLD,
        width=frame,
    )

    # Tight grotesque DY — size chosen so the pair sits visually centered
    font_size = int(size * 0.46)
    font = ImageFont.truetype(FONT_PATH, font_size)
    text = "DY"
    bbox = draw.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    x = (size - tw) / 2 - bbox[0]
    y = (size - th) / 2 - bbox[1] - size * 0.02

    d_w = draw.textbbox((0, 0), "D", font=font)
    d_width = d_w[2] - d_w[0]
    tracking = -size * 0.035
    draw.text((x, y), "D", font=font, fill=WHITE)
    draw.text((x + d_width + tracking, y), "Y", font=font, fill=GOLD)
    return img


def save_png(size: int, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    draw_mark(size).save(dest, "PNG", optimize=True)


def _png_bytes(img: Image.Image) -> bytes:
    from io import BytesIO

    buf = BytesIO()
    img.save(buf, "PNG")
    return buf.getvalue()


def save_ico(dest: Path) -> None:
    """Write a PNG-in-ICO with 16/32/48 frames (browsers pick the best)."""
    import struct

    frames = [(s, _png_bytes(draw_mark(s))) for s in (16, 32, 48)]
    count = len(frames)
    offset = 6 + 16 * count
    header = struct.pack("<HHH", 0, 1, count)
    directory = b""
    payload = b""
    for size, data in frames:
        directory += struct.pack(
            "<BBBBHHII",
            size % 256,
            size % 256,
            0,
            0,
            1,
            32,
            len(data),
            offset,
        )
        payload += data
        offset += len(data)
    dest.write_bytes(header + directory + payload)


def main() -> None:
    save_ico(APP / "favicon.ico")
    save_png(32, APP / "icon.png")
    save_png(180, APP / "apple-icon.png")
    save_png(512, APP / "icon-512.png")
    # Public copies for explicit metadata URLs + cache-bust query
    save_ico(PUBLIC / "favicon.ico")
    save_png(32, PUBLIC / "icon-32.png")
    save_png(180, PUBLIC / "apple-touch-icon.png")
    save_png(512, PUBLIC / "icon-512.png")
    print("wrote brand icons")


if __name__ == "__main__":
    main()
