# Assignment

This assignment has three parts:

1. We want to write a program that watches the `items` folder for .xml Item Export files being added,
then reads the file, parses it into json and sends it to a websocket server.

2. We want to connect to a websocket server and listen for incoming Shopify Order json objects, then convert them to Sample_Order.xml files and place in the orders folder.

3. Lastly we want to package the script into an executable that can run on mac, linux and windows.

To test the websocket connection you can use the echo server here https://www.websocket.org/echo.html


## Resources

[Dev.to article explaining how pkg works.](https://dev.to/jochemstoel/bundle-your-node-app-to-a-single-executable-for-windows-linux-and-osx-2c89)

[pkg to create executable](https://github.com/vercel/pkg)
