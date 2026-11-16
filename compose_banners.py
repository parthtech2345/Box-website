import os
from PIL import Image, ImageFilter, ImageEnhance

# Canvas resolution: 21:9 cinematic full banner (1920x820)
W, H = 1920, 820

CHARCOAL = (32, 42, 46) # #202A2E

def create_cinematic_banner(fg_path, bg_ambient_path, output_path, zoom_scale=1.0, fg_shift_x=0):
    # 1. Base canvas in Industrial Charcoal
    canvas = Image.new("RGBA", (W, H), CHARCOAL + (255,))

    # 2. Ambient background (plant/machinery floor, soft blurred for depth of field)
    if os.path.exists(bg_ambient_path):
        bg = Image.open(bg_ambient_path).convert("RGBA")
        # Cover width/height
        aspect = bg.width / bg.height
        if aspect > (W / H):
            new_h = H
            new_w = int(H * aspect)
        else:
            new_w = W
            new_h = int(W / aspect)
        bg = bg.resize((new_w, new_h), Image.Resampling.LANCZOS)
        # Crop center
        left = (new_w - W) // 2
        top = (new_h - H) // 2
        bg = bg.crop((left, top, left + W, top + H))
        # Soft industrial blur & slight darkening for moody ambiance
        bg = bg.filter(ImageFilter.GaussianBlur(radius=8))
        enhancer = ImageEnhance.Brightness(bg)
        bg = enhancer.enhance(0.40)
        canvas.paste(bg, (0, 0))

    # 3. Main Subject on the Right (Kraft corrugated packaging, sharp and prominent)
    if os.path.exists(fg_path):
        fg = Image.open(fg_path).convert("RGBA")
        # Scale to occupy ~60% of width on the right, sharp and prominent
        target_h = int(H * 1.05 * zoom_scale)
        target_w = int(fg.width * (target_h / fg.height))
        fg = fg.resize((target_w, target_h), Image.Resampling.LANCZOS)

        # Create smooth gradient mask so left edge of foreground blends seamlessly into dark background
        mask = Image.new("L", (target_w, target_h), 255)
        fade_w = int(target_w * 0.35)
        for x in range(fade_w):
            alpha = int(255 * (x / fade_w))
            for y in range(target_h):
                mask.putpixel((x, y), alpha)

        # Position on the right side
        pos_x = W - target_w + 80 + fg_shift_x
        pos_y = (H - target_h) // 2
        canvas.paste(fg, (pos_x, pos_y), mask)

    # 4. Cinematic Dark Charcoal Gradient on the Left (for crisp text readability, exactly like reference)
    left_gradient = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    # Full solid charcoal from 0 to 45%, then smoothly fades out to 75%
    solid_end = int(W * 0.38)
    fade_end = int(W * 0.72)
    
    for x in range(W):
        if x <= solid_end:
            a = 245
        elif x <= fade_end:
            ratio = (x - solid_end) / (fade_end - solid_end)
            a = int(245 * (1 - ratio))
        else:
            a = 0
        for y in range(H):
            left_gradient.putpixel((x, y), CHARCOAL + (a,))

    canvas = Image.alpha_composite(canvas, left_gradient)

    # Convert to RGB and save
    out_rgb = canvas.convert("RGB")
    out_rgb.save(output_path, "PNG", quality=95)
    print(f"Generated: {output_path}")

# Generate all 4 slides:
# Slide 1: Brand Introduction (Kraft boxes right, dark industrial ambient left)
create_cinematic_banner(
    "d:/Box/Box-website/public/images/hero-boxes.png",
    "d:/Box/Box-website/public/images/factory-line-india.png",
    "d:/Box/Box-website/public/home/banner-01.png",
    zoom_scale=1.0,
    fg_shift_x=0
)

# Slide 2: Box Strength & Ply (3/5/7-ply containers on right, engineering plant left)
create_cinematic_banner(
    "d:/Box/Box-website/public/images/heavy-duty-box.png",
    "d:/Box/Box-website/public/images/factory-team-india.png",
    "d:/Box/Box-website/public/home/banner-02.png",
    zoom_scale=1.05,
    fg_shift_x=-20
)

# Slide 3: Custom & Printed Boxes (Custom mailers & print right, precision plant left)
create_cinematic_banner(
    "d:/Box/Box-website/public/images/printed-boxes.png",
    "d:/Box/Box-website/public/images/factory-line-india.png",
    "d:/Box/Box-website/public/home/banner-03.png",
    zoom_scale=1.05,
    fg_shift_x=-30
)

# Slide 4: Bulk Manufacturing & Supply (Organized warehouse dispatch right, automated factory left)
create_cinematic_banner(
    "d:/Box/Box-website/public/images/warehouse-dispatch-india.png",
    "d:/Box/Box-website/public/images/factory-team-india.png",
    "d:/Box/Box-website/public/home/banner-04.png",
    zoom_scale=0.98,
    fg_shift_x=40
)
