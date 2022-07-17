# Ebitcoiner Cloud Mining System - Admin Dashboard

- [Live Demo](https://user-dashboard-azure.vercel.app/)
- [Project Overview](#overview)
- [Getting Started](#getting-started)
- [Sign in Page](#sign-in-page)
  - [Step 1](#step-1)
  - [Step 2](#step-2)
- [Overview Page](#overview-page)
- [Hashrate Plans Page](#hashrate-plans-page)
- [Subscribed Users Page](#subscribed-users-page)
  - [User Profile Page](#user-profile-page)
    - [User Plans Tab](#user-plans-tab)
    - [User Mining Devices Tab](#user-mining-devices-tab)
    - [User Distributed Devices Tab](#user-distributed-devices-tab)
    - [Transaction Logs Tab](#transaction-logs-tab)
  - [Distributed Device Page](#distributed-device-page)
    - [Hashrate Plans Tab](#hashrate-plans-tab)
    - [Subscribed Users Tab](#subscribed-users-tab)
- [Miners Page](#miners-page)
- [Buy Requests Page](#buy-requests-page)
  - [New Request Tab](#new-request-tab)
  - [Approved Requests Tab](#approved-requests-tab)
- [Sellers Page](#sellers-page)
- [Company Farm Page](#company-farm-page)
  - [Active Workers Tab](#active-workers-tab)
  - [Inactive Workers Tab](#inactive-workers-tab)

# Getting Started

```bash
git clone https://github.com/Ahmedsk143/Admin-Dashboard
cd Admin-Dashboard
npm install
npm start
```

- Mining is the process of trying to earn crypto. It is currently taking the world by storm as everyone is trying to learn how to mine cryptocurrencies.

- Ebitcoiner (Cloud mining System) is a method that allows everyday investors who may lack sufficient technical knowledge to mine cryptocurrencies. It reduces overall costs associated with mining.

- With Ebitcoiner, investors can purchase the hashing power. They can rent crypto mining hardware that can achieve the desired hash rate at a certain market price without dealing with heat, noise problems, and government issues (it is illegal in some countries).

- The system enables users to build and control a mining business from home without bothering themselves with the whole process.

- A user dashboard is implemented that helps the investors to buy and control their hash rate plans or their mining devices.

- The investors will be able to deposit or withdraw funds and watch all the transactions in a table.

- An Admin dashboard is implemented for adding, editing, or deleting plans for the users.

- The admin accepts the user’s buying or booking requests.

# Sign in Page

- Only the admin can log in to the system through this page
- This can be done in two simple steps

## Step 1

- The admin enters the correct password and then clicks Send OTP
- An OTP is sent to the admin email to verify his login session
  ![Sign up page](https://i.imgur.com/6vMi4f0.png)
  ![OTP Sent](https://i.imgur.com/qTNdG55.png)

## Step 2

- The code is expired after 30 seconds
- The admin can resend a new OTP every 30 seconds
  ![Sign up page ](https://i.imgur.com/mgqmo0E.png)

# Overview Page

- The admin can view his balance, total users, plans, mining devices, and a lot more!
  ![Overview page](https://i.imgur.com/jFPVkN0.png)

# Hashrate Plans Page

- View plans by currency
- Edit, delete plans and set them as active or inactive
  ![Hashrae plans page](https://i.imgur.com/pBcgEut.png)

# Subscribed Users Page

- View all information about the system users
- Search and sort the users in the table
- The [See Profile](#user-profile-page) button shows more information for each user
  ![Subs Users Page](https://i.imgur.com/OHv21Iv.png)

## User Profile Page

- View the user details, balances, plans, devices, distributed devices, and transaction logs

### User Plans Tab

- View active and inactive plans, search, and sort
- ![User plans](https://i.imgur.com/f44PtMA.png)

### User Mining Devices Tab

- View active and inactive devices and details of each device
  ![User plans](https://i.imgur.com/CToHwgz.png)

### User Distributed Devices Tab

- This tab only shows if the user is registered as a Seller
- View distributed devices and more details by clicking [See Details](#distributed-device-page) button
  ![Distributed Devices Tab](https://i.imgur.com/qleKWmt.png)

### Transaction Logs Tab

- View Deposit and Withdrawals logs
  ![Transaction logs](https://i.imgur.com/Ub0eITa.png)

## Distributed Device Page

- View all plans associated with the device, and all users that subscribed to these plans

### Hashrate Plans Tab

![Hashrate plans tab](https://i.imgur.com/6MwrH6c.png)

### Subscribed Users Tab

![Subscribed Users Tab ](https://i.imgur.com/FBahOkT.png)

# Miners Page

- View, add, edit, and delete mining devices that will be shown to the users, and set them as active or inactive
- View the devices by currency
  ![Miners page](https://i.imgur.com/g3jkwki.png)
- The add new miner form
  ![](https://i.imgur.com/9PLT6JA.png)
- The edit Form
  ![Edit Form](https://i.imgur.com/3fntXkp.png)
- The delete confirmation
  ![Confirmation](https://i.imgur.com/bM8Kw4o.png)
- The view by currency menu
  ![View](https://i.imgur.com/ZJrCSYP.png)

# Buy Requests Page

- View the buy requests, who requests, accept the request, and view all approved requests

## New Request Tab

- Search and sort, click on the user id to go to his [profile](#user-profile-page)
- Accept request form
  ![](https://i.imgur.com/df6tA01.png)

## Approved Requests Tab

- View details of all approved requests and end these requests
  ![](https://i.imgur.com/xQr7aum.png)
- End contract form
  ![](https://i.imgur.com/BPmGqPR.png)

# Sellers Page

- View all sellers that had registred on the system and view their [profile](#user-profile-page)
- Search and sort the sellers by any column
  ![](https://i.imgur.com/H6uBdIc.png)

# Company Farm Page

## Active Workers Tab

- View all active workers owned by the company or by the users
- End or delete these devices
- Add new worker
  ![](https://i.imgur.com/tv7tXrw.png)
- The add worker form
  ![](https://i.imgur.com/K02EOtq.png)

## Inactive Workers Tab

- View inactive workers and delete them
  ![](https://i.imgur.com/6oZT7dx.png)
