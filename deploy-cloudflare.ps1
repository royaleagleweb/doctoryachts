# One-click deploy Doctor Yachts to Cloudflare Workers
# Run:  powershell -ExecutionPolicy Bypass -File .\deploy-cloudflare.ps1

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host ""
Write-Host "=== Doctor Yachts → Cloudflare deploy ===" -ForegroundColor Cyan
Write-Host ""

# Ensure PATH has node
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

Write-Host "[1/4] Checking Cloudflare login..." -ForegroundColor Yellow
$who = npx wrangler whoami 2>&1 | Out-String
if ($who -match "not authenticated|You are not logged in") {
  Write-Host "A browser window will open. Click ALLOW for Wrangler." -ForegroundColor Green
  Write-Host "Waiting up to 3 minutes for you to approve..." -ForegroundColor Green
  npx wrangler login
  if ($LASTEXITCODE -ne 0) {
    Write-Host "Login failed or timed out. Run again and approve faster." -ForegroundColor Red
    exit 1
  }
} else {
  Write-Host $who
  Write-Host "Already logged in." -ForegroundColor Green
}

Write-Host ""
Write-Host "[2/4] Installing deps if needed..." -ForegroundColor Yellow
npm install

Write-Host ""
Write-Host "[3/4] Building OpenNext bundle (2–5 min)..." -ForegroundColor Yellow
npx opennextjs-cloudflare build
if ($LASTEXITCODE -ne 0) {
  Write-Host "Build failed." -ForegroundColor Red
  exit 1
}

Write-Host ""
Write-Host "[4/4] Deploying Worker 'doctoryachts'..." -ForegroundColor Yellow
npx wrangler deploy
if ($LASTEXITCODE -ne 0) {
  Write-Host "Deploy failed." -ForegroundColor Red
  exit 1
}

Write-Host ""
Write-Host "=== DEPLOYED ===" -ForegroundColor Green
Write-Host "1. Open the workers.dev URL printed above and confirm phone is (347) 951-5710" -ForegroundColor White
Write-Host "2. Cloudflare Dashboard → Workers → doctoryachts → Settings → Domains" -ForegroundColor White
Write-Host "   → Add custom domain: doctoryachts.com" -ForegroundColor White
Write-Host "3. If old static Pages project also uses the domain, remove that custom domain first" -ForegroundColor White
Write-Host ""
