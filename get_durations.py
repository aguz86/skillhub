import subprocess
import sys

urls = [
    "https://www.youtube.com/watch?v=jy4hu-OCZyk",
    "https://youtu.be/k770iAEFAf8",
    "https://youtu.be/7M48MpJhtZM",
    "https://youtu.be/JwZ44XuU0Is",
    "https://youtu.be/QivRO-ha3nc",
    "https://youtu.be/65FsgZgY9nw",
    "https://youtu.be/sLIWeydRkWg",
    "https://www.youtube.com/watch?v=h07V4jTGbnk",
    "https://www.youtube.com/watch?v=lEL3KJ3pShw",
    "https://youtu.be/zO3l5iRxTHk",
    "https://youtu.be/kA2D_sQhqtc",
    "https://youtu.be/FRW8y7PdM1c",
    "https://youtu.be/RT8dPAdiaOs",
    "https://youtu.be/gUMLD3AeR70",
    "https://youtu.be/o2W4zZdB0ic",
    "https://www.youtube.com/watch?v=FFMrtc4mq3o",
    "https://www.youtube.com/watch?v=R-tToI6SZ58",
    "https://www.youtube.com/watch?v=J5lE-TRvZYE",
    "https://www.youtube.com/watch?v=IlCdJ_x7nW4",
    "https://www.youtube.com/watch?v=ket4Ct-08HU",
    "https://www.youtube.com/watch?v=C3hCdSG5WwE",
    "https://youtu.be/nZjKSd5vz9k",
    "https://www.youtube.com/watch?v=Kpf500EeB10",
    "https://www.youtube.com/watch?v=Nr2Yr8UWCx8",
    "https://www.youtube.com/watch?v=qbEjNQyKVEU",
    "https://www.youtube.com/watch?v=PAPfaEw3UaI",
    "https://youtu.be/TGGG8dBPAjg",
    "https://www.youtube.com/watch?v=VIkUibifcco",
    "https://www.youtube.com/watch?v=ikNYynB-fXI",
    "https://youtu.be/hrQqLpvg48A",
    "https://www.youtube.com/watch?v=3jD48VK2kMw",
    "https://www.youtube.com/watch?v=aiEE5wm4TXU",
    "https://www.youtube.com/watch?v=UNJwC5fdabg",
    "https://www.youtube.com/watch?v=0LLtUVEG35I",
    "https://www.youtube.com/watch?v=yB_MvLF0tNk"
]

total = 0
for url in urls:
    try:
        result = subprocess.run(["yt-dlp", "--get-duration", url], capture_output=True, text=True)
        duration_str = result.stdout.strip()
        if duration_str:
            parts = duration_str.split(':')
            if len(parts) == 2:
                mins, secs = map(int, parts)
                total += mins * 60 + secs
            elif len(parts) == 3:
                hrs, mins, secs = map(int, parts)
                total += hrs * 3600 + mins * 60 + secs
            elif len(parts) == 1:
                total += int(parts[0])
    except Exception as e:
        print(f"Error {url}: {e}", file=sys.stderr)
        
print(total // 60)
