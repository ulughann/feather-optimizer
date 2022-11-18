@Echo Off
Title Network opt

echo Running netsh cmds

timeout 1 >nul

ipconfig /release

ipconfig /renew

ipconfig /flushdns

netsh winsock reset

cls

exit