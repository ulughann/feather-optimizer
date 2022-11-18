rmdir /s /q "C:\Windows\System32\drivers\NVIDIA Corporation"
cd /d "C:\Windows\System32\DriverStore\FileRepository\"
dir NvTelemetry64.dll /a /b /s
del NvTelemetry64.dll /a /s