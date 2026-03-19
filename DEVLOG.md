
# DEVLOG

*Dev: Ops*  
*Start Date: February 15, 2026*  
*End Date: ---*  

---

## Looking Back --- [March 19, 2026]

### Quick Word

Hello! I'm back. Today, I decided to do a recap on the things I did. Mentioning the stuffs I did, and telling you why it was developed. Why do this? Going over these kind of things is important for you and other learners out there to know the reasons behind the design. Maybe I'll mention a couple of weird facts XD.

### The Life Cycle

Normally, when developing, you follow a life cycle. That is true, and I do follow that.

    Plan -> Analyze -> Design -> Develop -> Test -> Deploy -> Maintain

That is a typical Software Development Life Cycle. With that, you might be wondering, where are my plans, analysis, and design? My plans and analysis are written in a document (idk if I'll release it), and my design is in **Figma** (I'll share this one soon!). They way I do this is through Modular Development, I first pick a *Must-have* feature from the plans, and then design it, then develop, then so on and so forth.

Why did I do it this way? It makes things manageable, the milestone is visible, and goals are clear. Even though, I work alone in this project, it never hurts to be disciplined and *elegant* when coding. For example:

I got 3 features in a Web App:

- Login
- Callback
- Signup

I first arrange the features needed by how important they are or how early are they needed. Usually I determine this by looking at the architecture of the System. For this example, obviously, you can't have a Login without Signup (In a normal operation). Do you see what I'm trying to say? You do things part-by-part, like Lego Bricks have different blocks to build a house. In here, **we build modules, and combine them to form a system.** This way, goals are clear and realistic.

*We Developers solve a complex problem by breaking it down into simple problems.*

Once you understand that, I can now say that my Figma is still under development. The reason is that, whenever a new feature is being built, I design it there first, before developing. That way, I get a clear idea how the module will look like, without medling with the frontend too much.

### The Hero

Right now, the Hero Section looks so empty. It's designed that way because it is temporary, the design is not yet finished on Figma, but I needed a landing page as soon as possible. So, I quickly made the most simple Hero Section. You might notice in my commits that I already have a previous design for the Hero Section.

**In fact, I got designs for all current features that are not in my Figma Design.**

This was a mistake I made in the past, and would like to fix it now. Remember the Life Cycle I just mentioned above? Yeah, I didn't follow that before. So, I plan to clean my current build right now, before continuing. This time, I'll make sure to follow the Cycle and avoid any problems. As you may notice, some pages have buttons that are not components, yet. I made it that way, because I wanted it to *"work"* for now... I am not allowed to make anything fancy, until I finished cleaning up the mess I made. Some of you might ask, why not start over? Now that question is pretty simple. It wasn't a grave mistake, and I can always fix things. Plus, it makes my commit history look cool, imagine being so messy at first, then slowly becoming a proper developer. **It shows growth and progress.**

I wanted to develop the Hero Page once the design is ready, and once the code is clean.

### The Sign Up and Log In Pages

The same goes for the Sign up and Log In Pages, they don't have a final design, that's why they are so simple right now. But, they do work... Honestly, the backend still needs more improvement, but it does work.

As for the database? I am using **Supabase**. It's free and great, and also secure! It uses PostgreSQL, and offers a lot of services. Supabase helps me build Authentication and Tokens real quick, and it saves me development time. Why did I choose to do it this way? Other that it saves time, it is much more secure, and my application doesn't focus on showcasing a manually built authentication system. Besides, why make things much more harder when there's a better way to do it. There's basically a table in there that helps with accounts and stuff, but that's another topic for later.

As for the Password Validator, I did use Regular Expression (RegEx) for it. But, there's a twist. Instead of a very long line of RegEx, I splitted it apart for certain patterns. There's one for leading and tracking whitespaces, allowed characters, and length. I haven't implemented, like, character requirements. **I have to clean the code first~**. I just separated the RegEx to have a more specific error message, and clean code, so I know which to change when something goes wrong.

Aside from that, there are `hooks` and `services` that are being cleaned. This are being used by The Sign Up and Log in Pages to implement functionality. I built these modules to separate the backend and frontend. I learned from a lot of programmers before, that a function or module, must only do **ONE** clear task. If that module handles frontend, it will only handle frontend. Now, I plan to also separate some certain block of codes in some of the functions, but I'll do that when I started inspecting them.

To explain, `hooks` are used here to communicate between the frontend and backend, between the client and server. And this hooks are connected to the `services` where most of the magic happens. The `services` are still messy, and I do plan to clean them.

### The Callback

As you can see, there's no callback page XD. Again, I won't touch the backend that much until I clean the system. But, there is a `proxy.ts` though. It's basically a Role-based Control Access (RBCA) Module. It prevent Unauthorized access in certain sites, including those who tries to skip signups and logins.


### Lastly

With that, I hope you gain a little bit more understanding in this project. If you got more questions, please don't hesitate to reach out to me. Anyway, that's that. I'll be back for more soon!

## Better Late than Never --- [March 16, 2026]

### Hello, World

Hi! Welcome to my DevLog! Just a quick note, this project started on **February 15, 2026**... but I started to document things on **March 16, 2026**. Why? Because I didn't know any better back then. Recently, I learned about the importance of documenting this things, it helps future developers *knowing the 'whys' behind things*. It is also important to show your *way of thinking* with other people, it helps them to understand you and gives an information on whether to invite you on their team or not.

Moreover, I think this is a good way to change my pace. It helps refreshens my mind, and get me a recap on the things I did. You can read about the project description under the `README.md`, so let's keep this file as our little own diary. Pure, raw, thoughts. No filter, no sugar coating. Anyway, if you're still reading this far, I hope you learn something here, or be able to see what you are checking out. In any case, thank you!
