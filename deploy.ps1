# ====================================================
# 酒店预订系统 - GitHub Pages 一键部署
# ====================================================
Write-Host "🏨 悦居酒店预订系统 - GitHub Pages 部署" -ForegroundColor Cyan
Write-Host "========================================"

# 1. 获取 GitHub 用户名
$username = Read-Host "请输入你的 GitHub 用户名"
if ([string]::IsNullOrWhiteSpace($username)) {
    Write-Host "用户名不能为空！" -ForegroundColor Red
    exit 1
}

# 2. 获取 Personal Access Token
Write-Host ""
Write-Host "需要 GitHub Personal Access Token 来创建仓库。" -ForegroundColor Yellow
Write-Host "如果还没有 Token，请打开: https://github.com/settings/tokens/new" -ForegroundColor Yellow
Write-Host "权限选择: repo (全部勾选)" -ForegroundColor Yellow
$token = Read-Host "请输入 GitHub Token" -AsSecureString
$BSTR = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($token)
$plainToken = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($BSTR)

# 3. 设置 Git 身份
$email = Read-Host "请输入你的 GitHub 邮箱"
git config user.name $username
git config user.email $email

# 4. 创建 GitHub 仓库
Write-Host "`n创建 GitHub 仓库..." -ForegroundColor Cyan
$body = @{ name = "hotel-booking"; description = "酒店预订系统 - 悦居"; private = $false } | ConvertTo-Json
$headers = @{ Authorization = "token $plainToken"; Accept = "application/vnd.github+json" }

try {
    $repo = Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Method Post -Body $body -Headers $headers -ContentType "application/json"
    Write-Host "仓库创建成功: $($repo.html_url)" -ForegroundColor Green
} catch {
    if ($_.Exception.Response.StatusCode -eq 422) {
        Write-Host "仓库已存在，跳过创建。" -ForegroundColor Yellow
    } else {
        Write-Host "创建仓库失败: $_" -ForegroundColor Red
        exit 1
    }
}

# 5. 设置远程并推送
Write-Host "`n推送代码到 GitHub..." -ForegroundColor Cyan
$remoteUrl = "https://github.com/$username/hotel-booking.git"
git remote remove origin 2>$null
git remote add origin $remoteUrl
git push -u origin master

if ($LASTEXITCODE -ne 0) {
    Write-Host "推送失败，请检查网络或Token权限。" -ForegroundColor Red
    exit 1
}

# 6. 启用 GitHub Pages
Write-Host "`n启用 GitHub Pages..." -ForegroundColor Cyan
$pagesBody = @{ source = @{ branch = "master"; path = "/" } } | ConvertTo-Json
try {
    Invoke-RestMethod -Uri "https://api.github.com/repos/$username/hotel-booking/pages" -Method Post -Body $pagesBody -Headers $headers -ContentType "application/json"
    Write-Host "GitHub Pages 已启用！" -ForegroundColor Green
} catch {
    Write-Host "Pages 启用可能需要手动操作，请访问: https://github.com/$username/hotel-booking/settings/pages" -ForegroundColor Yellow
}

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "✅ 部署完成！" -ForegroundColor Green
Write-Host "🔗 网站地址: https://$username.github.io/hotel-booking/" -ForegroundColor Cyan
Write-Host "（可能需要等待1-2分钟才能访问）" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan

# 清理 token 变量
$plainToken = $null
