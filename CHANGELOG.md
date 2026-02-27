## VERSION 0.1.0 - AUTHENTICATION SYSTEM
LAST COMMIT: *985d9cceb295698c20a3dfd60afa8e3765948586*

Finished Authetication and Authorization System using Supabase. Users are now able to signup and login to application.

**NOTE: FURTHER IMPROVEMENTS IS REQUIRED, THEREFORE, THIS IS SIMPLY A FUNCTIONAL SYSTEM**


### VERSION 0.0.12 - Proxy [FEB. 26, 2026]
LAST COMMIT: *6165a443439770c98900ae387b97002d9f6dc474*

Added proxy.ts to guard pages and prevent unauthorized access.

**NEW**
- proxy.ts (middleware)


### VERSION 0.0.11 - CI [FEB. 26, 2026]
LAST COMMIT: *4010cccd960fbd3b695bb29dde240f6b3fee904f*

Added a ci.yml to automate and ensure the functionality of the application

**NEW**
- ci.yml

**FIXED**
- Fixed Linter warnings/errors, npm deprecation, and react errors.


### VERSION 0.0.10 - Supabase Tables [FEB. 26, 2026]
LAST COMMIT: *434cedbe5b3da655ade46502d3cb06e0b86b1b41*

Removed unsused tables for the meantime, and updated the profiles table. Also added functionality to setup page to set up the profiles table.

**NEW**
- New policies to ensure data security
- Functional setup page

### VERSION 0.0.9 - Validation of Signup/Login [FEB. 26, 2026]
LAST COMMIT: *1b2b29e9f37e95b1803eb3f474fd45221b059157*

Improved the security through password validation with common password requirements and regex.

**NEW**
- Added temporary route to manager.tsx after successful login
- Updated logic to use new password validator
- Fixed typos of text size classname in signup and login


### VERSION 0.0.8 - Improvements 03 [FEB. 25, 2026]
LAST COMMIT: *5582bd5b5d868ac7998784529df96533dc320f3d*

Further improvements to button styling and functionality as a component.

**NEW**
- New styles (Primary, Secondary, Tertiary)
- Accepts functions, navigation, and loading


### VERSION 0.0.7 - Login Improvements [FEB. 23, 2026]
LAST COMMIT: *d01e8f85e2d40323ce01e602b6cb3bad0752eeb8*

Add and improve functionality of Login implementation to allow old users to access the application.

**AFFECTED AREAS**
- Adjusted file naming for better clarity (portal.tsx -> signup.tsx)
- Added functionality to login
- 


### VERSION 0.0.6 - Signup Implementation [FEB. 22, 2026]
LAST COMMIT: *de06ebdc284203f357c205213fcd85a805834d87*

Add signup functionality to allow new users to access the application.
**NOTE: STILL UNDER DEVELOPMENT** 

**NEW**
- Signup Page
- Hooks and Validators


### VERSION 0.0.5 - Improvements 02 [FEB. 22, 2026]
LAST COMMIT: *0a72a99e37567ff725bc8cf3756a1d1c96177aab*

Improvements for components and file structure for ease of development and efficiency.

**AFFECTED AREAS**
- InputField (Component)
- Supabase (File)
- Portal (Removed)


### VERSION 0.0.4 - Supabase [FEB. 20, 2026]
LAST COMMIT: *5cedc59b25d623c1cd6c9a30ad6c1d56134d9a07*

Integrated Supabase to the application for authentication and storing of data.

**NEW**
- Supabase Client (Connection)
- Supabase Types (Database Schema)


### VERSION 0.0.3 - Improvements 01 [FEB. 20, 2026]
LAST COMMIT: *be98f8f6e6ce097f16973a102b4d1a71c5d02863*

Improved the color and looks of other components to better match Figma design.

**AFFECTED AREAS**
- Navigation Bar
- UI Colors
- Hero Section


### VERSION 0.0.2 - Initial Design for Application [FEB. 19, 2026]
LAST COMMIT: *9fc71c0497e70c8b50ab539c74e4066849ac6580*

Formed the first phase of the core components to have an initial design to follow.

**COMPONENTS FORMED**
- Hero Section
- Login Form
- Delivery Receipt Form
- Button


### VERSION 0.0.1 - Setup of the Application [FEB. 19, 2026]
LAST COMMIT: *388e32970bc4542d651c2555379ae56790e074b1*

Contains initial color palette and clean up of pre-coded pages by Next.js.

- Used OKLCH values instead of HEX or HSL to have more control over the colors
- Cleaned the initial page pre-coded by Next.js
- Added a skeleton for navigation bar


### VERSION 0.0.0 - Start of Development [FEB. 15, 2026]
LAST COMMIT: *428a4cf58f03f2da23225a50813f2ac2b07deb0c*

The initial commit for this development journey.

**TECH STACK**
- Next.JS
- TailwindCSS
- Supabase