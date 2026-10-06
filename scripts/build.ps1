# Script đóng gói và kiểm tra toàn diện
Write-Host "[Bìa Sờn Nắng Mới] Đang biên dịch mã nguồn..." -ForegroundColor Cyan
Set-Location "$PSScriptRoot/../app/biason-frontend"
& npm.cmd run build
if ($LASTEXITCODE -eq 0) {
    Write-Host "[Bìa Sờn Nắng Mới] Biên dịch hoàn tất thành công 100%!" -ForegroundColor Green
} else {
    Write-Host "[Bìa Sờn Nắng Mới] Có lỗi trong quá trình biên dịch!" -ForegroundColor Red
}
