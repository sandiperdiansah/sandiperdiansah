<p align="right">
  <a href="https://wakatime.com/@f141defe-4ab4-412a-9268-a99cc646a38f">
    <img src="https://wakatime.com/badge/user/f141defe-4ab4-412a-9268-a99cc646a38f.svg" height="16" />
  </a>
</p>

```ts
class FullStackDeveloper {
  public name: string;
  public role: string;
  public stack: {
    languages: string[];
    frameworks: string[];
    tools: string[];
  };

  constructor() {
    this.name = "Sandi Perdiansah";
    this.role = "Full Stack Developer";
    this.stack = {
      languages: ["JavaScript", "TypeScript"],
      frameworks: ["Angular", "React", "NestJS"],
      tools: ["Git", "VS Code", "WebStorm"]
    };
  }

  sayHello(): string {
    return "Hello! Thanks for stopping by — feel free to explore my projects and contributions.";
  }
}

const me = new FullStackDeveloper();
me.sayHello();

