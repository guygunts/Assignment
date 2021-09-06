# **Castcle API**
## A decentralized social media for everyone

[![N|Solid](https://avatars.githubusercontent.com/u/85831466?s=200&v=4)](https://github.com/castcle)

This is a source code repository of [Castcle Platform](https://castcle.com)'s backend micro services.

All works and source files published in this repository are published under [GNU AGPLv3](https://github.com/castcle/castcle-api/blob/main/LICENSE) license terms.

## **About** <a name="about"></a>

**Our first mission** is to create a **fair social media** by decentralizing values created on the platform back to the hands of whom it might belong to. We believe that **everyone plays a crucial role in contributing values to the platform**, for example, creating contents, giving feedbacks on those contents by clicking on *LIKE* button, etc. Data generated by every single user will benefit the platform --the community-- as a whole. Thus, the users should earn some benefits and own the community that they help building up as well. **Castcle will reward users by distributing CAST token to each contribution they made** e.g. feed reading, content creating and content farming. This makes every user beneficial from the success of Castcle platform by just holding CAST token. **Ultimately, in the long run, anyone can be an owner of Castcle platform proportionated to the values they created on this platform.**

## **Philosophy**

#### *DON'T* - Decentralize Everything

Eventhough we believe in user rights and free speeches, **decentralizing content custodian can cause more harm than good**. For example, violence VDOs, photos demonstrating drug uses, mis/disinformation contents, might affect users without discretion, especially in youth users. Hence, by disrupting the power of content custodian, making no one can take down violated contents, will apparently cause more harm to the society than good. **This is why we're not focusing on building up a non-content-custodian social network platform.**

#### *DO* - Decentralize the Ownership

As the rise of blockchain technology, making anyone can trust on digital assets, aka *TOKEN*, will play a crucial role in making social media fairer. As stated in *[About](#about)* section above, we believe that decentralizing platform ownership to users proportionated to the values they created is a key to create a successful and more sustainable ecosystem.

## **Whitepaper**

For ***Tokenomics, Key Features, Key Ideas,*** and more ***Technical Issues***, please see our ***[WHITEPAPER](https://drive.google.com/file/d/1-67KY3kSFyV1YZ1A8Qxv4UAPVxYcTzvJ/view?usp=sharing)*** and ***[PITCH DECK](https://drive.google.com/file/d/1BbIhjiLjt5zyWQk3NsJtpphpw4HBWOtc/view?usp=sharing)*** for more details.

## **Getting Started**

#### Prerequisites

- Download and ***install npm*** from https://nodejs.org/en/download/.

- Download and ***install git*** tool you prefer. If you don't have one, try [Github Desktop](https://desktop.github.com/).

- ***Clone***, aka ***Check out***, this repository to your local `<INSTALL_DIR>` by following [these steps](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository).

- **Navigate to `<INSTALL_DIR>`** by using ***Cmd*** *(in Windows)* or ***Terminal*** *(in MacOS)*.

- **Install dependency packages** by executing:
  ```
    > npm install
  ```

#### Running Dev Server

- You can run the Castcle's API backend server by executing:
  ```
    > npm run start
  ```

#### Unit Testing

- To **run ALL** unit tests:
  ```
    > npm run test
  ```

- To **run EACH** micro service's unit tests:
  ```
    > npm run test:<service-name>
  ```
  For example, `npm run test:feeds` for *'feeds'* service. You can see all available `test:<service-name>`s in `package.json`.

#### Building

- To **build ALL** micro services:
  ```
    > npm run build
  ```

- To **build EACH** micro service:
  ```
    > npm run build:<service-name>
  ```
  For example, `npm run build:authentications` for *'authentications'* service. You can see all available `build:<service-name>`s in `package.json`.

#### Deploying

- **Dockerize** the app by running `Dockerfile.*` files in `<INSTALL_DIR>` using `> docker build`.

  *See: [docker build](https://docs.docker.com/engine/reference/commandline/build/)*

- **Deploy** Castcle's micro services using *docker image* generated from step above via `> docker run` on your local computer or in any *container environments*.

  *See: [docker run](https://docs.docker.com/engine/reference/commandline/run/)*

## **License**

[GNU Affero General Public License v3](https://github.com/castcle/castcle-api/blob/main/LICENSE)
