import React from "react";

export const UI = {
    en: {
        workExperience: "Work Experience",
        skills: "Skills",
        education: "Education",
        languages: "Languages",
        certifications: "Certifications",
        print: "Print / PDF",
    },
    de: {
        workExperience: "Berufserfahrung",
        skills: "Kenntnisse",
        education: "Ausbildung",
        languages: "Sprachen",
        certifications: "Zertifikate",
        print: "Drucken / PDF",
    },
};

export const ABOUT = {
    en: {
        DEFAULT: (
            <span>
                Software engineer since 2012 — 6+ years of production <b>React/TypeScript</b> and
                4+ years of <b>Rust</b>. I build async network tooling, real-time 3D
                with <b>Bevy</b>, and SDK-grade React component libraries — comfortable owning a
                feature from the protocol or shader level up to the UI.
                Author of <b>tentacli</b> (70+ ★ on GitHub).
            </span>
        ),
        RUST: (
            <span>
                Rust engineer focused on systems work: async networking with <b>tokio</b>,
                custom <b>proc-macros</b>, <b>FFI</b>, and real-time 3D
                with <b>Bevy</b> and <b>WGSL</b> shaders. 12+ years of overall engineering
                background (React/TypeScript, Python) — I bring production discipline into Rust code.
                Author of <b>tentacli</b> (70+ ★ on GitHub).
            </span>
        ),
        REACT: (
            <span>
                Frontend engineer with 6+ years of production <b>React/TypeScript</b>:
                real-time UIs, SDKs and component libraries, data visualization
                with <b>d3.js</b>. Systems background in <b>Rust</b> (async networking,
                game development with Bevy) — I understand what happens below the API.
                In the market since 2012.
            </span>
        ),
    },
    de: {
        DEFAULT: (
            <span>
                Softwareentwickler seit 2012 — über 6 Jahre <b>React/TypeScript</b> in Produktion
                und über 4 Jahre <b>Rust</b>. Ich baue asynchrone Netzwerk-Tools, Echtzeit-3D
                mit <b>Bevy</b> und React-Komponentenbibliotheken auf SDK-Niveau — von der
                Protokoll- oder Shader-Ebene bis zur UI.
                Autor von <b>tentacli</b> (70+ ★ auf GitHub).
            </span>
        ),
        RUST: (
            <span>
                Rust-Entwickler mit Fokus auf Systemnähe: asynchrone Netzwerke mit <b>tokio</b>,
                eigene <b>proc-macros</b>, <b>FFI</b> und Echtzeit-3D mit <b>Bevy</b> und <b>WGSL</b>-Shadern.
                Über 12 Jahre Engineering-Hintergrund (React/TypeScript, Python) —
                Produktionsdisziplin auch im Rust-Code.
                Autor von <b>tentacli</b> (70+ ★ auf GitHub).
            </span>
        ),
        REACT: (
            <span>
                Frontend-Entwickler mit über 6 Jahren <b>React/TypeScript</b> in Produktion:
                Echtzeit-UIs, SDKs und Komponentenbibliotheken, Datenvisualisierung
                mit <b>d3.js</b>. Systemhintergrund in <b>Rust</b> (asynchrone Netzwerke,
                Spieleentwicklung mit Bevy). Auf dem Markt seit 2012.
            </span>
        ),
    },
};

const GH_TENCH = <a href="https://github.com/tench-rt/">github.com/tench-rt</a>;
const GH_EKO = <a href="https://github.com/sergio-ivanuzzo/eko-media">github.com/sergio-ivanuzzo/eko-media</a>;

export const EXPERIENCE = {
    en: {
        DEFAULT: [
            {
                position: "Rust Engineer",
                jobType: "Open Source",
                company: "tench-rt (own projects)",
                period: "November 2021 - Now",
                bullets: [
                    <React.Fragment key="1">
                        <b>tentacli</b> (70+ ★, 200+ commits) — a plugin-based framework for exploring
                        network protocols: connects to servers as a full protocol endpoint (TCP/UDP),
                        reads and sends packets according to defined rules, and presents the protocol
                        in a human-readable form; <b>tokio</b>, <b>serde</b>, custom <b>proc-macro</b> derives,
                        TUI on <b>ratatui</b>. {GH_TENCH}
                    </React.Fragment>,
                    <React.Fragment key="2">
                        grew out of a WoW 3.3.5a console client into a protocol-agnostic runtime hosting
                        multiple independent connections — used for protocol visualization and as a
                        testbed for servers driven by many controlled clients.
                    </React.Fragment>,
                    <React.Fragment key="3">
                        <b>tine</b> — minimal server counterpart for protocol testing and traffic visualization.
                    </React.Fragment>,
                ],
            },
            {
                position: "Software Engineer",
                jobType: "Project",
                location: "",
                company: "Vocational Training Center",
                period: "November 2025 - January 2026",
                bullets: [
                    <React.Fragment key="1">
                        built <b>Werkbank</b> — a desktop app for the carpentry training workshop,
                        replacing a multi-tab Excel workbook apprentices used to plan their learning
                        projects: it manages trainees and materials, auto-calculates areas, waste
                        allowances and costs, and generates the full project paperwork (material lists,
                        cut list, cost summary, evaluation sheet) with barcodes via jsbarcode.
                        <b>React</b> (zustand, styled-components) on a <b>Tauri</b> shell with
                        a <b>Rust</b> + <b>SQLite</b> backend.
                    </React.Fragment>,
                    <React.Fragment key="2">
                        designed for the actual users: fully keyboard-driven navigation, minimal
                        clicks; gathered requirements directly from workshop users.
                    </React.Fragment>,
                ],
            },
            {
                position: "React Engineer",
                jobType: "Full Time",
                location: "Bangkok, Thailand",
                company: "Amity",
                period: "September 2020 - March 2023",
                bullets: [
                    <React.Fragment key="1">
                        owned and shipped core features of a social-network <b>SDK</b> (TypeScript, <b>MobX</b>)
                        and its <b>React</b> UI kit: feeds, comments, communities, followers,
                        push notifications, hard delete.
                    </React.Fragment>,
                    <React.Fragment key="2">
                        worked on the SDK real-time core — <b>LiveObject</b> models synchronized
                        over <b>WebSocket</b> with concurrent connections.
                    </React.Fragment>,
                    <React.Fragment key="3">
                        built a layer of low-level reusable components that became the foundation of
                        the UI kit; covered features with <b>Storybook</b> stories and <b>jest</b> tests.
                    </React.Fragment>,
                ],
            },
            {
                position: "React Engineer",
                jobType: "Freelance",
                location: "Remote",
                company: "VoxUkraine",
                period: "April 2021 - June 2021",
                bullets: [
                    <React.Fragment key="1">
                        built a data-visualization tool for media analysts from scratch: <b>React</b> + <b>TypeScript</b>,
                        charts with <b>d3.js</b>, reusable hooks, <b>Storybook</b>. {GH_EKO}
                    </React.Fragment>,
                ],
            },
            {
                position: "Earlier Experience",
                jobType: "Full Stack / Frontend",
                location: "Ukraine",
                company: "Gameloft · Devart · DDI Development · AgileEngine and others",
                period: "2012 - 2020",
                bullets: [
                    <React.Fragment key="1">
                        <b>Python</b> back-end + <b>AWS Lambda</b> (AgileEngine); <b>React/Redux Saga</b> + TypeScript
                        for a hotel-booking service (DDI Development); <b>d3.js</b> dashboards and
                        AngularJS → Angular migration (Devart); started with PHP full-stack (Gameloft
                        and others); taught JavaScript/React to 6 student groups at Spalah IT-School.
                    </React.Fragment>,
                ],
            },
        ],
        RUST: [
            {
                position: "Rust Engineer",
                jobType: "Open Source",
                company: "tench-rt (own projects)",
                period: "November 2021 - Now",
                bullets: [
                    <React.Fragment key="1">
                        <b>tentacli</b> (70+ ★, 200+ commits) — a plugin-based framework for exploring
                        network protocols. It participates in the protocol as a full endpoint (not a
                        sniffer or MITM tool): connects to one or many servers over TCP/UDP, reads and
                        sends packets by defined rules, and presents the protocol in a human-readable
                        form; grew out of a WoW 3.3.5a console client into a protocol-agnostic
                        runtime. {GH_TENCH}
                    </React.Fragment>,
                    <React.Fragment key="2">
                        architecture: a runtime coordinating three plugin types — <b>network</b> (connection,
                        transport, packet framing via async read/write tasks), <b>processor</b> (parsers,
                        protocol handlers, packet generators) and <b>core</b> (event coordination) — with a
                        context shared across all plugins and connections at runtime
                        (<b>Arc&lt;RwLock&gt;</b>); built-in <b>doctor</b> mode for diagnosing builds,
                        plugin wiring and config resolution.
                    </React.Fragment>,
                    <React.Fragment key="3">
                        stack: <b>tokio</b> (tasks, mpsc, Notify), <b>async-broadcast</b>, <b>serde</b>,
                        custom <b>macro_rules!</b> / <b>proc-macro</b> derives, plugin selection via Cargo
                        features, TUI on <b>ratatui</b>/<b>crossterm</b>, <b>FFI</b> to C++ libraries for
                        debugging; close attention to memory efficiency.
                    </React.Fragment>,
                    <React.Fragment key="4">
                        a <b>binary classification model</b> implemented from scratch in pure Rust —
                        no ML frameworks.
                    </React.Fragment>,
                    <React.Fragment key="5">
                        <b>tine</b> — minimal server counterpart for protocol testing and traffic visualization.
                    </React.Fragment>,
                ],
            },
            {
                position: "Software Engineer",
                jobType: "Project",
                location: "",
                company: "Vocational Training Center",
                period: "November 2025 - January 2026",
                bullets: [
                    <React.Fragment key="1">
                        <b>Werkbank</b> — a desktop app for a carpentry training workshop, replacing a
                        multi-tab Excel workbook apprentices used for their learning projects;
                        calculates materials, waste allowances and costs and generates the project
                        paperwork with barcodes. <b>Tauri</b> shell with a <b>Rust</b> + <b>SQLite</b> backend
                        and a React front-end; fully keyboard-driven; requirements gathered directly from workshop users.
                    </React.Fragment>,
                ],
            },
            {
                position: "React Engineer",
                jobType: "Full Time",
                location: "Bangkok, Thailand",
                company: "Amity",
                period: "September 2020 - March 2023",
                bullets: [
                    <React.Fragment key="1">
                        owned and shipped features of a social-network <b>SDK</b> (TypeScript, <b>MobX</b>,
                        real-time models over <b>WebSocket</b>) and its <b>React</b> UI kit;
                        Storybook + jest coverage.
                    </React.Fragment>,
                ],
            },
            {
                position: "Earlier Experience",
                jobType: "Full Stack / Frontend",
                location: "Ukraine",
                company: "Gameloft · Devart · DDI Development · AgileEngine and others",
                period: "2012 - 2021",
                bullets: [
                    <React.Fragment key="1">
                        <b>React/TypeScript</b> product work (hotel booking, data visualization
                        with d3.js), <b>Python</b> back-end + AWS Lambda, AngularJS → Angular migration;
                        started with PHP full-stack (Gameloft and others), taught JavaScript at an IT school.
                    </React.Fragment>,
                ],
            },
        ],
        REACT: [
            {
                position: "React Engineer",
                jobType: "Full Time",
                location: "Bangkok, Thailand",
                company: "Amity",
                period: "September 2020 - March 2023",
                bullets: [
                    <React.Fragment key="1">
                        developed a social-network <b>SDK</b> (TypeScript, <b>MobX</b>) and
                        the <b>React</b> UI kit built on top of it — components that let customers
                        deploy a full social network: chat, feed, communities.
                    </React.Fragment>,
                    <React.Fragment key="2">
                        owned and shipped end-to-end features across SDK and UI: feeds, comments,
                        communities, followers, push notifications, hard delete — from <b>Figma</b> design
                        to release.
                    </React.Fragment>,
                    <React.Fragment key="3">
                        worked on the SDK real-time core — <b>LiveObject</b> models synchronized
                        over <b>WebSocket</b> with multiple concurrent connections.
                    </React.Fragment>,
                    <React.Fragment key="4">
                        saved team time by building a layer of low-level reusable components that became
                        the foundation for complex ones; <b>Storybook</b> stories and <b>jest</b> coverage;
                        fixed a number of hard SDK bugs; contributed to <b>REST API</b> design and docs.
                    </React.Fragment>,
                ],
            },
            {
                position: "Software Engineer",
                jobType: "Project",
                location: "",
                company: "Vocational Training Center",
                period: "November 2025 - January 2026",
                bullets: [
                    <React.Fragment key="1">
                        built <b>Werkbank</b> — a desktop app replacing a multi-tab Excel workbook
                        apprentices used to plan learning projects (material and cost calculation,
                        generated project documents with barcodes): <b>React</b> + <b>zustand</b> +
                        styled-components on <b>Tauri</b> (Rust + SQLite backend), barcodes with <b>jsbarcode</b>.
                    </React.Fragment>,
                    <React.Fragment key="2">
                        focused on user-friendliness for non-technical users: fully keyboard-driven
                        navigation; gathered requirements directly from workshop users.
                    </React.Fragment>,
                ],
            },
            {
                position: "React Engineer",
                jobType: "Freelance",
                location: "Remote",
                company: "VoxUkraine",
                period: "April 2021 - June 2021",
                bullets: [
                    <React.Fragment key="1">
                        built a data-visualization tool for media analysts from scratch: <b>React</b> + <b>TypeScript</b> from
                        a Figma design, charts with <b>d3.js</b>, navigation with <b>React Router</b>,
                        a core of reusable hooks, <b>Storybook</b> for client-side testing. {GH_EKO}
                    </React.Fragment>,
                ],
            },
            {
                position: "React Engineer",
                jobType: "Full Time",
                location: "Kharkov, Ukraine",
                company: "DDI Development",
                period: "March 2019 - October 2019",
                bullets: [
                    <React.Fragment key="1">
                        developed <b>React (TypeScript)</b> components for a hotel-booking service in
                        direct collaboration with the client; business logic on <b>Redux Saga</b>,
                        REST API integration, unit and integration tests with <b>jest</b>.
                    </React.Fragment>,
                ],
            },
            {
                position: "Rust Engineer",
                jobType: "Open Source",
                company: "tench-rt (own projects)",
                period: "November 2021 - Now",
                bullets: [
                    <React.Fragment key="1">
                        systems work in <b>Rust</b>: <b>tentacli</b> — a plugin-based framework for
                        network protocol exploration (70+ ★ on GitHub, tokio/serde/proc-macros). {GH_TENCH}
                    </React.Fragment>,
                ],
            },
            {
                position: "Earlier Experience",
                jobType: "Full Stack / Frontend",
                location: "Ukraine",
                company: "Gameloft · Devart · AgileEngine and others",
                period: "2012 - 2020",
                bullets: [
                    <React.Fragment key="1">
                        <b>d3.js</b> dashboards and AngularJS → Angular migration (Devart), <b>Python</b> back-end
                        + AWS Lambda (AgileEngine), PHP full-stack (Gameloft and others); taught
                        JavaScript/React to 6 student groups at Spalah IT-School.
                    </React.Fragment>,
                ],
            },
        ],
    },
    de: {
        DEFAULT: [
            {
                position: "Rust Engineer",
                jobType: "Open Source",
                company: "tench-rt (eigene Projekte)",
                period: "November 2021 - heute",
                bullets: [
                    <React.Fragment key="1">
                        <b>tentacli</b> (70+ ★, 200+ Commits) — Plugin-basiertes Framework zur
                        Untersuchung von Netzwerkprotokollen: verbindet sich als vollwertiger
                        Protokoll-Endpunkt (TCP/UDP) mit Servern, liest und sendet Pakete nach
                        definierten Regeln und stellt das Protokoll menschenlesbar
                        dar; <b>tokio</b>, <b>serde</b>, eigene <b>proc-macro</b>-Derives, TUI
                        mit <b>ratatui</b>. {GH_TENCH}
                    </React.Fragment>,
                    <React.Fragment key="2">
                        aus einem WoW-3.3.5a-Konsolenclient zu einer protokollagnostischen Runtime
                        gewachsen, die mehrere unabhängige Verbindungen hostet — einsetzbar zur
                        Protokollvisualisierung und als Testumgebung für Server mit vielen
                        gesteuerten Clients.
                    </React.Fragment>,
                    <React.Fragment key="3">
                        <b>tine</b> — minimaler Server als Gegenstück für Protokolltests und
                        Traffic-Visualisierung.
                    </React.Fragment>,
                ],
            },
            {
                position: "Software Engineer",
                jobType: "Projekt",
                location: "",
                company: "Berufsbildungszentrum",
                period: "November 2025 - Januar 2026",
                bullets: [
                    <React.Fragment key="1">
                        <b>Werkbank</b> — Desktop-App für die Tischler-Übungswerkstatt, als Ersatz für
                        eine Excel-Arbeitsmappe mit vielen Reitern, mit der Azubis ihre Lernprojekte
                        geplant haben: berechnet Material, Verschnittzuschläge und Kosten und erzeugt
                        die komplette Projektdokumentation (Materiallisten, Zuschnittliste,
                        Kostenübersicht, Bewertungsbogen) samt Barcodes. <b>React</b> (zustand,
                        styled-components) auf einer <b>Tauri</b>-Shell mit <b>Rust</b>-+-<b>SQLite</b>-Backend.
                    </React.Fragment>,
                    <React.Fragment key="2">
                        konsequent auf die tatsächlichen Nutzer ausgelegt: vollständig per Tastatur
                        bedienbar, minimale Klicks; Anforderungen direkt bei den Nutzern aufgenommen.
                    </React.Fragment>,
                ],
            },
            {
                position: "React Engineer",
                jobType: "Vollzeit",
                location: "Bangkok, Thailand",
                company: "Amity",
                period: "September 2020 - März 2023",
                bullets: [
                    <React.Fragment key="1">
                        Kernfeatures eines Social-Network-<b>SDK</b> (TypeScript, <b>MobX</b>) und des
                        zugehörigen <b>React</b>-UI-Kits verantwortet und ausgeliefert: Feeds,
                        Kommentare, Communities, Follower, Push-Benachrichtigungen, Hard Delete.
                    </React.Fragment>,
                    <React.Fragment key="2">
                        am Echtzeit-Kern des SDK gearbeitet — <b>LiveObject</b>-Modelle, synchronisiert
                        über <b>WebSocket</b> mit parallelen Verbindungen.
                    </React.Fragment>,
                    <React.Fragment key="3">
                        eine Schicht wiederverwendbarer Low-Level-Komponenten gebaut, die zur Grundlage
                        des UI-Kits wurde; Abdeckung mit <b>Storybook</b> und <b>jest</b>.
                    </React.Fragment>,
                ],
            },
            {
                position: "React Engineer",
                jobType: "Freiberuflich",
                location: "Remote",
                company: "VoxUkraine",
                period: "April 2021 - Juni 2021",
                bullets: [
                    <React.Fragment key="1">
                        Datenvisualisierungs-Tool für Medienanalysten von Grund auf
                        gebaut: <b>React</b> + <b>TypeScript</b>, Charts mit <b>d3.js</b>,
                        wiederverwendbare Hooks, <b>Storybook</b>. {GH_EKO}
                    </React.Fragment>,
                ],
            },
            {
                position: "Frühere Tätigkeiten",
                jobType: "Full Stack / Frontend",
                location: "Ukraine",
                company: "Gameloft · Devart · DDI Development · AgileEngine u. a.",
                period: "2012 - 2020",
                bullets: [
                    <React.Fragment key="1">
                        <b>Python</b>-Backend + <b>AWS Lambda</b> (AgileEngine); <b>React/Redux Saga</b> + TypeScript
                        für einen Hotelbuchungsdienst (DDI Development); <b>d3.js</b>-Dashboards und
                        AngularJS-→-Angular-Migration (Devart); Einstieg mit PHP Full-Stack (Gameloft
                        u. a.); JavaScript/React-Unterricht für 6 Gruppen an der Spalah IT-School.
                    </React.Fragment>,
                ],
            },
        ],
        RUST: [
            {
                position: "Rust Engineer",
                jobType: "Open Source",
                company: "tench-rt (eigene Projekte)",
                period: "November 2021 - heute",
                bullets: [
                    <React.Fragment key="1">
                        <b>tentacli</b> (70+ ★, 200+ Commits) — Plugin-basiertes Framework zur
                        Untersuchung von Netzwerkprotokollen. Es nimmt als vollwertiger Endpunkt am
                        Protokoll teil (kein Sniffer, kein MITM-Tool): verbindet sich mit einem oder
                        mehreren Servern über TCP/UDP, liest und sendet Pakete nach definierten Regeln
                        und stellt das Protokoll menschenlesbar dar; aus einem
                        WoW-3.3.5a-Konsolenclient zu einer protokollagnostischen Runtime
                        gewachsen. {GH_TENCH}
                    </React.Fragment>,
                    <React.Fragment key="2">
                        Architektur: eine Runtime koordiniert drei Plugin-Typen — <b>Network</b> (Verbindung,
                        Transport, Packet-Framing über asynchrone Read/Write-Tasks), <b>Processor</b> (Parser,
                        Protokoll-Handler, Paketgeneratoren) und <b>Core</b> (Ereignis-Koordination) —
                        mit einem zur Laufzeit über alle Plugins und Verbindungen geteilten Kontext
                        (<b>Arc&lt;RwLock&gt;</b>); eingebauter <b>Doctor</b>-Modus zur Diagnose von
                        Build, Plugin-Verdrahtung und Konfigurationsauflösung.
                    </React.Fragment>,
                    <React.Fragment key="3">
                        Stack: <b>tokio</b> (Tasks, mpsc, Notify), <b>async-broadcast</b>, <b>serde</b>,
                        eigene <b>macro_rules!</b>-/<b>proc-macro</b>-Derives, Plugin-Auswahl über
                        Cargo-Features, TUI mit <b>ratatui</b>/<b>crossterm</b>, <b>FFI</b> zu
                        C++-Bibliotheken fürs Debugging; Fokus auf Speichereffizienz.
                    </React.Fragment>,
                    <React.Fragment key="4">
                        ein <b>binäres Klassifikationsmodell</b>, von Grund auf in reinem Rust
                        implementiert — ohne ML-Frameworks.
                    </React.Fragment>,
                    <React.Fragment key="5">
                        <b>tine</b> — minimaler Server als Gegenstück für Protokolltests und
                        Traffic-Visualisierung.
                    </React.Fragment>,
                ],
            },
            {
                position: "Software Engineer",
                jobType: "Projekt",
                location: "",
                company: "Berufsbildungszentrum",
                period: "November 2025 - Januar 2026",
                bullets: [
                    <React.Fragment key="1">
                        <b>Werkbank</b> — Desktop-App für eine Tischler-Übungswerkstatt als Ersatz für
                        eine Excel-Arbeitsmappe für die Lernprojekte der Azubis; berechnet Material,
                        Verschnittzuschläge und Kosten und erzeugt die Projektdokumentation mit
                        Barcodes. <b>Tauri</b>-Shell mit <b>Rust</b>-+-<b>SQLite</b>-Backend und
                        React-Frontend; vollständig per Tastatur bedienbar; Anforderungen direkt bei den Nutzern aufgenommen.
                    </React.Fragment>,
                ],
            },
            {
                position: "React Engineer",
                jobType: "Vollzeit",
                location: "Bangkok, Thailand",
                company: "Amity",
                period: "September 2020 - März 2023",
                bullets: [
                    <React.Fragment key="1">
                        Features eines Social-Network-<b>SDK</b> (TypeScript, <b>MobX</b>,
                        Echtzeitmodelle über <b>WebSocket</b>) und des <b>React</b>-UI-Kits
                        verantwortet und ausgeliefert; Storybook- und jest-Abdeckung.
                    </React.Fragment>,
                ],
            },
            {
                position: "Frühere Tätigkeiten",
                jobType: "Full Stack / Frontend",
                location: "Ukraine",
                company: "Gameloft · Devart · DDI Development · AgileEngine u. a.",
                period: "2012 - 2021",
                bullets: [
                    <React.Fragment key="1">
                        <b>React/TypeScript</b>-Produktarbeit (Hotelbuchung, Datenvisualisierung mit
                        d3.js), <b>Python</b>-Backend + AWS Lambda, AngularJS-→-Angular-Migration;
                        Einstieg mit PHP Full-Stack (Gameloft u. a.), JavaScript-Unterricht an einer
                        IT-Schule.
                    </React.Fragment>,
                ],
            },
        ],
        REACT: [
            {
                position: "React Engineer",
                jobType: "Vollzeit",
                location: "Bangkok, Thailand",
                company: "Amity",
                period: "September 2020 - März 2023",
                bullets: [
                    <React.Fragment key="1">
                        Social-Network-<b>SDK</b> (TypeScript, <b>MobX</b>) und das darauf
                        aufbauende <b>React</b>-UI-Kit entwickelt — Komponenten, mit denen Kunden ein
                        vollständiges soziales Netzwerk aufsetzen können: Chat, Feed, Communities.
                    </React.Fragment>,
                    <React.Fragment key="2">
                        End-to-End-Features über SDK und UI hinweg verantwortet und ausgeliefert:
                        Feeds, Kommentare, Communities, Follower, Push-Benachrichtigungen, Hard
                        Delete — vom <b>Figma</b>-Design bis zum Release.
                    </React.Fragment>,
                    <React.Fragment key="3">
                        am Echtzeit-Kern des SDK gearbeitet — <b>LiveObject</b>-Modelle, synchronisiert
                        über <b>WebSocket</b> mit mehreren parallelen Verbindungen.
                    </React.Fragment>,
                    <React.Fragment key="4">
                        dem Team Zeit gespart durch eine Schicht wiederverwendbarer
                        Low-Level-Komponenten als Grundlage komplexerer
                        Komponenten; <b>Storybook</b>- und <b>jest</b>-Abdeckung; schwierige SDK-Bugs
                        behoben; am Design und der Dokumentation der <b>REST API</b> mitgewirkt.
                    </React.Fragment>,
                ],
            },
            {
                position: "Software Engineer",
                jobType: "Projekt",
                location: "",
                company: "Berufsbildungszentrum",
                period: "November 2025 - Januar 2026",
                bullets: [
                    <React.Fragment key="1">
                        <b>Werkbank</b> — Desktop-App als Ersatz für eine Excel-Arbeitsmappe, mit der
                        Azubis ihre Lernprojekte geplant haben (Material- und Kostenkalkulation,
                        generierte Projektdokumente mit Barcodes): <b>React</b> + <b>zustand</b> +
                        styled-components auf <b>Tauri</b> (Rust-+-SQLite-Backend), Barcodes
                        mit <b>jsbarcode</b>.
                    </React.Fragment>,
                    <React.Fragment key="2">
                        Fokus auf Benutzerfreundlichkeit für nicht-technische Nutzer: vollständig per
                        Tastatur bedienbar; Anforderungen direkt bei den Nutzern aufgenommen.
                    </React.Fragment>,
                ],
            },
            {
                position: "React Engineer",
                jobType: "Freiberuflich",
                location: "Remote",
                company: "VoxUkraine",
                period: "April 2021 - Juni 2021",
                bullets: [
                    <React.Fragment key="1">
                        Datenvisualisierungs-Tool für Medienanalysten von Grund auf gebaut: <b>React</b> + <b>TypeScript</b> nach
                        Figma-Design, Charts mit <b>d3.js</b>, Navigation mit <b>React Router</b>,
                        ein Kern wiederverwendbarer Hooks, <b>Storybook</b> für kundenseitige
                        Tests. {GH_EKO}
                    </React.Fragment>,
                ],
            },
            {
                position: "React Engineer",
                jobType: "Vollzeit",
                location: "Charkiw, Ukraine",
                company: "DDI Development",
                period: "März 2019 - Oktober 2019",
                bullets: [
                    <React.Fragment key="1">
                        <b>React-(TypeScript)</b>-Komponenten für einen Hotelbuchungsdienst in direkter
                        Abstimmung mit dem Kunden entwickelt; Business-Logik mit <b>Redux Saga</b>,
                        REST-API-Anbindung, Unit- und Integrationstests mit <b>jest</b>.
                    </React.Fragment>,
                ],
            },
            {
                position: "Rust Engineer",
                jobType: "Open Source",
                company: "tench-rt (eigene Projekte)",
                period: "November 2021 - heute",
                bullets: [
                    <React.Fragment key="1">
                        Systemarbeit in <b>Rust</b>: <b>tentacli</b> — Plugin-basiertes Framework zur
                        Analyse von Netzwerkprotokollen (70+ ★ auf GitHub, tokio/serde/proc-macros). {GH_TENCH}
                    </React.Fragment>,
                ],
            },
            {
                position: "Frühere Tätigkeiten",
                jobType: "Full Stack / Frontend",
                location: "Ukraine",
                company: "Gameloft · Devart · AgileEngine u. a.",
                period: "2012 - 2020",
                bullets: [
                    <React.Fragment key="1">
                        <b>d3.js</b>-Dashboards und AngularJS-→-Angular-Migration
                        (Devart), <b>Python</b>-Backend + AWS Lambda (AgileEngine), PHP Full-Stack
                        (Gameloft u. a.); JavaScript/React-Unterricht für 6 Gruppen an der Spalah
                        IT-School.
                    </React.Fragment>,
                ],
            },
        ],
    },
};

export const SKILLS = {
    en: [
        {
            type: "Rust",
            items: "tokio, serde, macro_rules! / proc-macro, Bevy (ECS), WGSL shaders, ratatui, async-broadcast, bitflags, FFI, Cargo features",
        },
        {
            type: "Frontend",
            items: "TypeScript, React (hooks), Next.js, MobX, zustand, Redux / Redux Saga, styled-components, d3.js, WebSocket, REST API, Storybook, jest, Tauri",
        },
        {
            type: "AI-assisted engineering",
            items: "agentic workflows (Claude, GPT / Codex), prompt design, patch-based AI code review, multi-model pipelines",
        },
        {
            type: "Also",
            items: "Python (Django), Node.js, SQL (MySQL, SQLite), Docker, GitHub Actions, Linux shell",
        },
    ],
    de: [
        {
            type: "Rust",
            items: "tokio, serde, macro_rules! / proc-macro, Bevy (ECS), WGSL-Shader, ratatui, async-broadcast, bitflags, FFI, Cargo-Features",
        },
        {
            type: "Frontend",
            items: "TypeScript, React (Hooks), Next.js, MobX, zustand, Redux / Redux Saga, styled-components, d3.js, WebSocket, REST API, Storybook, jest, Tauri",
        },
        {
            type: "KI-gestützte Entwicklung",
            items: "agentische Workflows (Claude, GPT / Codex), Prompt-Design, patch-basiertes Review von KI-Code, Multi-Modell-Pipelines",
        },
        {
            type: "Außerdem",
            items: "Python (Django), Node.js, SQL (MySQL, SQLite), Docker, GitHub Actions, Linux-Shell",
        },
    ],
};

export const EDUCATION = {
    en: {
        organization: "Kharkov Radio-Engineering College",
        location: "Kharkov, Ukraine",
        speciality: "Programming for computers and automated systems",
        degree: "Associate degree",
    },
    de: {
        organization: "Kharkov Radio-Engineering College",
        location: "Charkiw, Ukraine",
        speciality: "Programmierung für Computer und automatisierte Systeme",
        degree: "Fachschulabschluss (Associate Degree)",
    },
};

export const LANGUAGES_LIST = {
    en: [
        { name: "English", level: "B2" },
        { name: "German", level: "B1" },
        { name: "Russian", level: "Native" },
    ],
    de: [
        { name: "Englisch", level: "B2" },
        { name: "Deutsch", level: "B1" },
        { name: "Russisch", level: "Muttersprache" },
    ],
};
