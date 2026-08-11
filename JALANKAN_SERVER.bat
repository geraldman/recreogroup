@echo off
title Recreo Group - PHP Server
color 0A
echo =============================================
echo   RECREO GROUP - PHP Development Server
echo =============================================
echo.
echo Server sedang berjalan di: http://localhost:8080
echo.
echo Buka browser dan ketik: http://localhost:8080/index.php
echo.
echo Tekan CTRL+C untuk menghentikan server.
echo =============================================
echo.
cd /d D:\recreogroup
php -S localhost:8080
pause
