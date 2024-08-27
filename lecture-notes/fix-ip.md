We having troubles accessing our service on WSL. We need to forward ports. 

###Get public ip from windows:

ipconfig


###Get ip of a linux subsystem: 

ip addr



###Forward ports:


netsh interface portproxy add v4tov4 listenport=3000 listenaddress=0.0.0.0 connectport=3000 connectaddress=WSL_IP
