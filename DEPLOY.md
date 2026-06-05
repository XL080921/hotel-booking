# ===================================================
# 酒店预订系统 - GitHub Pages 部署指南
# ===================================================

# 1. 先安装 GitHub CLI (如果还没装)
winget install GitHub.cli

# 2. 登录 GitHub
gh auth login

# 3. 进入项目目录
cd "C:\Users\dony\Documents\Codex\2026-06-05\new-chat-4\work\hotel-booking"

# 4. 设置你的 Git 身份
git config user.name "你的名字"
git config user.email "你的邮箱@example.com"

# 5. 创建 GitHub 仓库（用你的用户名替换 YOUR_USERNAME）
gh repo create hotel-booking --public --source=. --remote=origin --push

# 6. 启用 GitHub Pages
gh api repos/YOUR_USERNAME/hotel-booking/pages -X POST -f "source[branch]=master" -f "source[path]=/"

# 7. 等待几秒后访问
# https://YOUR_USERNAME.github.io/hotel-booking/
# ===================================================
