
Desktop setup:
1. Install Azure CLI with Homebrew
brew update
brew upgrade
brew install azure-cli
2. Verify Installation
az version
3. Login to Azure
az login
Opens browser window for authentication
4. install lens
brew install --cask lens
5. install kubernetes-cli
brew install kubernetes-cli

Azure Setup:
1. create VNET 
2. create subnets:
reserved
10.100.0.0/24

nonprod-k8s-nodes
10.100.4.0/22

nonprod-k8s-pods
10.100.8.0/21

nonprod-k8-services
10.100.2.0/23

nonprod-vpn-gateway
10.100.50.0/24

nonprod-k8s-reserved
10.100.80.0/21

3. setup VPN 