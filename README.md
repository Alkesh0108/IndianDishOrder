## Thali building app

This is build a thali ordering app. The user can customize the content of Thali. We can add or remove following items and change the quality of these items:

- Chapati
- Pickle 
- Curd
- Sweet
- Daal
- Paneer Dish

It is not mandatory to have all items in thali, but atleast two items should be present else you need to populate error message at the time of clicking checkout button. Each item have need to have a unit price.

When the user is done building the thali, they proceed to checkout page by clicking on checkout button, where they can view the items wise price and the total price of the thali.

While creating the project structure , you need to have following components in your app:

Thali.js - This will contain the UI of the ingradients added to the thali. for example if you have added pickle and curd, you need to diplay the picture of curd and pickle top of your page. if you remove pickle , the pickle image should not be displayed.


Checkout.js - This component will have the checkout summary of your thali and the final price.

You need to store the ingradients and thier quantity using redux store. 


update-node
update-node updates repositories to a new Node.js version.

Installation
$ npm install -g update-node
Quick start
From time to time, when you update to a new version of Node.js, you need to edit a lot of Dockerfile and circle.yml files as well. This is a tedious and time-consuming task.

To simplify this task you can run update-node within the directory that contains all of your repositories. Provide the new Node.js version as a parameter:

$ update-node <version>
Please note that update-node does not automatically commit or push any changes, this is still up to you. This gives you the chance to first review what update-node has done.

To commit and push for all changed repositories, you might want to use forany.

Running the build
To build this module use roboter.

$ bot
License
The MIT License (MIT) Copyright (c) 2016 the native web.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
