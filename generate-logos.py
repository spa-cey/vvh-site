import requests, base64, json, time, sys

API_URL = "https://cipher-cti.cognitiveservices.azure.com/openai/deployments/nba-cipher-content-pipeline-gpt-image-1.5/images/generations?api-version=2024-02-01"
API_KEY = "c21edf0e3d1240bd8ea7a876d31acd80"
OUT = "/Users/sanaan/Documents/PersonalProjects/vvh-site/logo-variations"

LOGOS = [
    # 1. Icon only — building silhouette mark, no text
    ("01-icon-only.png", """A minimal logomark icon with no text. Three geometric skyscraper buildings of different heights arranged as a tight cluster, viewed at a slight 3D perspective. The buildings are pure white with subtle charcoal gray shadows on their sides. A single bold red (#CC0000) curved swoosh wraps around the base of the buildings. Clean vector style, sharp edges, flat design with minimal depth. No text whatsoever. No letters. Just the building icon and red swoosh. Centered with generous padding."""),

    # 2. Bold monogram — interlocking VVH letters
    ("02-monogram.png", """A bold typographic monogram logo. The letters V V H interlocked and overlapping in a creative geometric arrangement. The first V and second V share a stroke, with the H connected to the right side. Pure white letters with one red (#CC0000) accent stroke on the middle V. Heavy geometric sans-serif letterforms with sharp angles. No other elements, no buildings, no additional text. Modern, architectural feel. Clean vector mark, centered with generous padding."""),

    # 3. Horizontal — icon left, text right, white on transparent
    ("03-horizontal-white.png", """A horizontal logo layout. On the left side, a cluster of three geometric skyscraper buildings in white with a red (#CC0000) curved swoosh at the base. On the right side, bold serif letters V V H in pure white, large and dominant. Below the VVH text in much smaller white letters with wide letter-spacing: CONSTRUCTION GROUP flanked by thin red horizontal lines. Clean corporate layout. All elements in white and red only. Sharp vector style. Left-to-right reading order."""),

    # 4. Stacked/vertical — icon on top, text below, white
    ("04-stacked-white.png", """A vertically stacked logo. At the top, three geometric skyscraper buildings in white arranged in a cluster with a bold red (#CC0000) curved accent swoosh wrapping the base. Below the icon, centered bold serif letters V V H in pure white, very large. Below that in much smaller white uppercase letters with wide tracking: CONSTRUCTION GROUP with thin red lines on either side. All white and red on transparent background. Balanced, symmetrical, corporate. Clean vector."""),

    # 5. Minimalist wordmark — just VVH in a distinctive typeface
    ("05-wordmark-minimal.png", """A minimalist wordmark logo. Just the letters VVH in a bold condensed geometric sans-serif typeface, pure white. The letters are tightly kerned. A thin red (#CC0000) horizontal line sits directly under the text spanning the full width. Below the red line in tiny uppercase white letters with extreme letter-spacing: CONSTRUCTION GROUP. Nothing else. No icon, no buildings, no decorative elements. Ultra clean, modern, architectural. Centered with generous padding."""),

    # 6. Badge/shield style — enclosed in a shape
    ("06-badge.png", """A badge-style logo. A tall shield or crest shape with a thin white border outline. Inside the shield, the letters VVH stacked vertically in bold white serif type. A red (#CC0000) horizontal bar divides the shield, with CONSTRUCTION above and GROUP below in tiny white uppercase letters. At the very top of the shield interior, a small geometric building silhouette in white. The overall shape is tall and narrow like a traditional crest or coat of arms. All white and red. Clean vector, sharp edges."""),

    # 7. Industrial/construction — hard hat, bold, rugged
    ("07-industrial.png", """An industrial construction logo. Bold heavy block letters VVH in white with a slight 3D extruded shadow in charcoal gray. The letter V has a red (#CC0000) construction hard hat sitting on top of it at a slight angle. Below the letters in a white banner ribbon shape: CONSTRUCTION GROUP in small black uppercase letters. Rugged, bold, no-nonsense industrial feel. The hard hat is simplified and iconic, not photorealistic. Clean vector style."""),

    # 8. Geometric/modern — abstract angular mark
    ("08-geometric.png", """An abstract geometric logo. The letters VVH formed from sharp angular geometric shapes — the two V shapes create a zigzag pattern and the H is formed from parallel vertical bars with a horizontal connector. All in white. The negative space between the V and H forms the shape of a building or tower. A red (#CC0000) diamond or angular accent sits at the apex where the V shapes meet. Ultra modern, architectural, Bauhaus-inspired. No additional text, no decorative elements. Clean minimal vector."""),

    # 9. Circle emblem — text around a circle
    ("09-circle-emblem.png", """A circular emblem logo. A circle with a thin white border. Inside the circle, three geometric building silhouettes in white rising from the bottom. The text VVH in bold white serif letters arcs across the top inside edge of the circle. The text CONSTRUCTION GROUP in small white letters arcs along the bottom inside edge. A red (#CC0000) five-pointed star or red accent dot sits at the very top center of the circle between the arcing text. Classic emblem style, like a city seal or union badge. All white and red."""),

    # 10. Split color — half red half white, modern
    ("10-split-modern.png", """A modern split-color logo. The letters VVH in a heavy bold geometric sans-serif font. The left half of each letter is red (#CC0000) and the right half is white, creating a striking split-color effect with a clean vertical dividing line through each letter. Below in small white uppercase letters with wide letter-spacing: CONSTRUCTION GROUP. No icon, no buildings. Just the dramatic split-color typography. Contemporary, eye-catching, memorable. Clean vector, centered."""),
]

for filename, prompt in LOGOS:
    print(f"Generating {filename}...", flush=True)
    try:
        resp = requests.post(API_URL,
            headers={"Content-Type": "application/json", "Authorization": f"Bearer {API_KEY}"},
            json={
                "prompt": prompt,
                "size": "1024x1024",
                "quality": "high",
                "output_format": "png",
                "background": "transparent",
                "n": 1
            },
            timeout=120
        )
        data = resp.json()
        if "data" in data:
            img_bytes = base64.b64decode(data["data"][0]["b64_json"])
            with open(f"{OUT}/{filename}", "wb") as f:
                f.write(img_bytes)
            print(f"  Saved ({len(img_bytes)//1024}KB)")
        else:
            print(f"  ERROR: {json.dumps(data.get('error',data))[:200]}")
    except Exception as e:
        print(f"  EXCEPTION: {e}")
    time.sleep(2)

print(f"\nDone! Generated {len([f for f in __import__('os').listdir(OUT) if f.endswith('.png')])} logos in {OUT}/")
