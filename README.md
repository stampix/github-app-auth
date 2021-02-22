# Authenticate inside actions with a Github App

```yml
      - uses: stampix/github-app-auth@v1
        with:
          appId: ${{ secrets.appId }}
          installationId: ${{ secrets.installationId }}
          privateKey: ${{ secrets.privateKey }}
```


## Bundling

`npx @vercel/ncc build index.js --license licenses.txt`