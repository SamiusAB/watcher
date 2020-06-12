# Assignment

We want to write a program that watches the `watched` folder for .xsd and .dat files being created,
then reads the file, parses it into json and sends it to a websocket server.

Lastly we want to package the script into an executable that can run on mac, linux and windows.

To test the websocket connection you can use the echo server here https://www.websocket.org/echo.html

Use the files in the [sample_files](./sample_files) folder to test the script.

## Resources

[Dev.to article explaining how pkg works.](https://dev.to/jochemstoel/bundle-your-node-app-to-a-single-executable-for-windows-linux-and-osx-2c89)
[pkg to create executable](https://github.com/vercel/pkg)
