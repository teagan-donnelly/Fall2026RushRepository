const contacts = [
  {
    label: "EMAIL",
    href: "mailto:teaganad@email.sc.edu",
    value: "teaganad@email.sc.edu",
    hint: "mailto",
  },
  {
    label: "LINKEDIN",
    href: "www.linkedin.com/in/teagan-donnelly",
    value: "www.linkedin.com/in/teagan-donnelly",
    hint: "profile",
  },
  {
    label: "GITHUB",
    href: "https://github.com/teagan-donnelly",
    value: "https://github.com/teagan-donnelly",
    hint: "repos",
  },
] as const;

export function Contact() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {contacts.map((contact) => (
        <a
          key={contact.label}
          href={contact.href}
          target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={
            contact.href.startsWith("mailto:")
              ? undefined
              : "noopener noreferrer"
          }
          className="panel glow-border group flex flex-col"
        >
          <div className="panel-title">
            <span className="text-primary">▸</span>
            {contact.label}
            <span className="ml-auto tracking-normal text-text-secondary normal-case">
              {contact.hint}
            </span>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-2 p-5">
            <p className="break-all font-mono text-sm text-text-primary sm:text-base">
              {contact.value}
            </p>
            <p className="font-mono text-xs tracking-[0.14em] text-text-secondary group-hover:text-primary">
              OPEN CHANNEL →
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
