### Motivation

- Modern world internet is like electricity. It changes how we live, and we use it everyday. We may not understand how it works, but understanding it gives you a deeper understanding of what is going on. 
	- By learning about how it works you can become "electrician" and just fix day-to-day things in your life, but also you can become "inventor" and build new things that are possible because of the internet. 
- Programming is the most accessible and wide creative canvas. And web is the most accessible way of programming for products. 

Proposal:
By the end of the course you would have enough instruments and understanding to feel what is possible and go execute on your creative ideas. 

### Technicalities and plan

- I will try to explain most things from the ground up and first principles, grounding all new concepts in the reasons why the concept was needed. 
- I will not attempt to teach the most suitable instrument or cover all available instruments. Rather will try to show approaches and instrument agnostic concepts. 

### History and build up of problems


first computers around war time to compute war things (40th)
computers is a bunch of relays that can either send electricity through or not send it through. 
Explain **Binary Numbers, processor clock**
You can combine them into more complicated structures to compute results, store memory and do conditionals and then you just combine more of them, write code in binary and get your first computers! 

For long time computers were becoming more powerful performing more computation per second. Programs more complicated, special people to encode it in binary code. in 1947 invented assembey language, computers more powerfull. They gain perifery devices like monitors and keyboards, still no internet. 
At some point we transitioned from writing programs directly for the the processing units to creating a single big program that constantly runs and gives it's users tools to execute other programs as part of it. This is called operating system. Creation of operating systems is a big step in raising the abstraction level that allows for 

All of the things going on in computer are going in binary things, but we can translate binary to text on the operating system level and think about text from now on

at some point someone decides to connect two computers together as an experiment. 

in the most basic sense, you can view computer as a weird type of external keyboard. 
you can send characters to another computer as you would send them to monitor and the other computer would receive them as if they were coming from keyboard. 

So with this setup we can transfer messages from one computer to another. Maybe you can write a program that sends text to other computer, and on the other computer you can write a program that accepts this text from this weird computer interface. 

So if we want to send messages and start writing programs to do that, we need to agree on what exactly we would send and what is the format of the message. Maybe we can include some headers, or signatures as a separate field. So that we agree that when we sent messages we actually send some structured text with those 3 fields and also automatically include the date. We need to agree about it with owner of the other laptop, so that they can accept a format that we send. By doing so, we are creating a standard, also called "protocol" for sending messages over the wire between two computers. 

Now we only have 2 computers and we can only send messages to those computers. We can connect second computer and instruct our message sending problem to accept a id of computer we want to send communication to. We would also include this "address" id in the message itself, just so that the program on the other side can confirm that the message was actually intended for it. 
On our laptop we would have to store some kind of mapping of laptop id's to "cords we need to send the signal too"
There is a question of how we set up those tables and assign those addresses id's consistently, we will get to it in a second. 

Actually if we have that, we can agree that if our computer gets a message that was not addressed to it, it just sends it in the direction of correct address. If we agree on that and add it to the "protocol" for our messaging program, we can simplify our "network topology", we can dedicate some computers to forwarding requests and storing routing tables relieve other network participans from that duty. 

We get a very extensible infrastructure that would allow us to connect almost unlimited number of computers together without significant latency overhead, through the chain of other computers. 

This application of sending messages is quite useful, but limited. We soon wanted to have other programs to communicate with other programs on other computers, so on top of individual computer address we need  to also specify the application that the message suppose to reach. We would call this "port"

We have copule more problems to solve to make it really usefull:
- Error correction -- special protocol with multiple messages and confirmations.
- Secret delivery -- encryption. Example with `g^a mod p * g^b mod p = g^(ab) mod p`
- Addresses are not human readable -- separate network of computers that are dedicated to holding the mapping.

So now we have a bunch of computers connected in a tree like network and sending messages to each other. Many new applications of this infrastructure emerge. One of those is file sharing. Instead of sending messages, we can agree on a protocol to send files over the same network. And we can go even further and instead of sending a file to some address, we agree to send the files to whoever asks for them. It would look like an exchange of messages instead of just one message, but would follow all the same rules that we can defien. When someone wanted to access file on our computer, they can send us a message asking to send the file back, and we would either return it or respond with a message that a file does not exist. 

We at first exchanged just text documents and then we decided that it would be nice to add some styles to the text, and maybe even some way to references to other files that exist on the same computer, so that more information can be presented on demand. 

This proved to be extremely useful and quickly exploded in popularity with many people setting up their computers to share some content on demand with references to other computers on the network with other relevant pieces. Like this super interconnected library of documents. 
Demand for different styling of the documents rose, standart for markup language was established for this network of interconnected documents that defined how those texts should be shown, and programs developed that understood this markup language and rendered pages according to it.  
Someone had an idea that it would be nice to also maybe allow authors of the documents to include some custom code that should be execuded during the rendering of the document. In case basic markdow did not support some features, like displaying a clicking timer for example. Just minor harmless things. Noone thought anything can go wrong here...

This network of shared documents became not only usefull, but also important for a lot of highly visible institutions and applications. 

It turned out that without changing the protocol, you can actually return different versions of one document to different people by executing some custom code on the side that is returning documetns. With this level of freedom we departed from the "collection of documents" approach to more of a one changing document with buttons. Everything started using it. Demand for features increased Making changes to the protocol become practically impossible. So instruments on top of existing protocols evolved to provide more and more complicated functionality, cause existing protocol handled it pretty well. 

And here we are. This is modern WorldWideWeb internet as we know it today. 

Let's recap what we have so far. To connect two laptops we do 
1. connect them through cables
2. Set up rules about how we deliver individual messages between computers and manage addresses (IP)
3. Set up rules on how to correct mistakes in individual messages by sending multiple messages back and forth (TCP)
4. Set up rules on what should be the content of the messages for applications to perform their functions
	1. Web -- HTTP
	2. Database -- MONGODB
	3. File -- FTP
	4. Remote Shell -- SSH

5. Make those messages secure -- add S to the name of protocol and apply encryption. 


The "interlinked document" thing that we talked about works on HTTP protocol, so let's talk about it a little more about what it is. 

Components of HTTP
- Method (GET, POST, DELETE)
- Resource locator -- in the url, after /
- Headers
- Body
- Responce code

This is the type of request that is sent by your browser to retrieve the document.

Couple more problems we can discover at this level:

- Not enough adresses --> Dynamic IP adresses
- Can get spammed with requests --> by default requests are not routed through by the firewall