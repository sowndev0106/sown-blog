* Refer  
https://kubedb.com/docs/0.12.0/guides/mongodb/quickstart/quickstart/
* Setup  
```shell script
kubectl.exe apply -f mongodb-staging.yaml
kubectl describe mg mongodb-nguyen-thanh-son-staging
kubectl get secrets mongodb-nguyen-thanh-son-staging-auth -o jsonpath='{.data.\username}' | base64 -d
kubectl get secrets mongodb-nguyen-thanh-son-staging-auth -o jsonpath='{.data.\password}' | base64 -d
```

```shell script
kubectl.exe apply -f mongodb-production.yaml
kubectl describe mg mongodb-nguyen-thanh-son-production
kubectl get secrets mongodb-nguyen-thanh-son-production-auth -o jsonpath='{.data.\username}' | base64 -d
kubectl get secrets mongodb-nguyen-thanh-son-production-auth -o jsonpath='{.data.\password}' | base64 -d
```
