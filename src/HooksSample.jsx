import React, { createContext, useContext, useEffect, useReducer, useState } from "react";

/**
 * React Hooks Playground — all in one file
 * - useState: theme (light/dark), custom step input
 * - useEffect: sync document.title + load/save count to localStorage
 * - useContext: ThemeContext to style the UI
 * - useReducer: counter logic with multiple actions
 */

// --------------- useContext: Theme Context ---------------
const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light"); // useState
    const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

    // Expose theme + an action
    const value = { theme, toggleTheme };
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
    return ctx;
}

// --------------- useReducer: Counter logic ---------------
const initialCounter = { count: 0 };

function counterReducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        case "reset":
            return initialCounter;
        case "addBy":
            return { count: state.count + (Number(action.payload) || 0) };
        case "set":
            return { count: Number(action.payload) || 0 };
        default:
            return state;
    }
}

// --------------- Small UI Pieces ---------------
function Card({ children }) {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    return (
        <div
            className={`rounded-2xl shadow p-6 transition-all border max-w-xl w-full
        ${isDark ? "bg-zinc-900 border-zinc-800 text-zinc-100" : "bg-white border-zinc-200 text-zinc-800"}
      `}
        >
            {children}
        </div>
    );
}

function Button({ onClick, children, variant = "solid", className = "" }) {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const base = "px-3 py-2 rounded-xl text-sm font-semibold transition active:scale-95";
    const solid = isDark
        ? "bg-zinc-800 hover:bg-zinc-700 border border-zinc-700"
        : "bg-zinc-100 hover:bg-zinc-200 border border-zinc-300";
    const primary = "bg-blue-600 hover:bg-blue-700 text-white border-transparent";
    const styles = variant === "primary" ? primary : solid;
    return (
        <button onClick={onClick} className={`${base} ${styles} ${className}`}>
            {children}
        </button>
    );
}

function Row({ children }) {
    return <div className="flex flex-wrap items-center gap-3">{children}</div>;
}

// --------------- Main Demo Component ---------------
export default function App() {
    return (
        <ThemeProvider>
            <AppInner />
        </ThemeProvider>
    );
}

function AppInner() {
    const { theme, toggleTheme } = useTheme();

    // useReducer for counter
    const [state, dispatch] = useReducer(counterReducer, initialCounter);

    // useState for custom step input
    const [step, setStep] = useState(5);

    // useEffect to sync title and persist count
    useEffect(() => {
        document.title = `Count: ${state.count} • Theme: ${theme}`;
    }, [state.count, theme]);

    // Load once on mount
    useEffect(() => {
        const saved = localStorage.getItem("demo_count");
        if (saved !== null) dispatch({ type: "set", payload: Number(saved) });
    }, []);

    // Save whenever count changes
    useEffect(() => {
        localStorage.setItem("demo_count", String(state.count));
    }, [state.count]);

    const isDark = theme === "dark";

    return (
        <div className={`${isDark ? "bg-zinc-950" : "bg-zinc-50"} min-h-screen py-10 px-4`}>
            <div className="max-w-2xl mx-auto space-y-6">
                <header className="flex items-center justify-between">
                    <h1 className="text-2xl md:text-3xl font-bold">React Hooks Playground</h1>
                    <Button onClick={toggleTheme}>
                        Toggle {isDark ? "Light" : "Dark"} Mode
                    </Button>
                </header>

                <Card>
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Counter (useReducer)</h2>
                        <p className="text-sm opacity-80">
                            useReducer is like a smart remote with buttons (actions) that change the count.
                        </p>

                        <div className="text-5xl font-black tracking-tight">{state.count}</div>

                        <Row>
                            <Button onClick={() => dispatch({ type: "decrement" })}>-1</Button>
                            <Button onClick={() => dispatch({ type: "increment" })}>+1</Button>
                            <Button onClick={() => dispatch({ type: "reset" })}>Reset</Button>
                        </Row>

                        <div className="pt-2 space-y-2">
                            <label className="block text-sm opacity-80">Custom step (useState)</label>
                            <input
                                type="number"
                                value={step}
                                onChange={(e) => setStep(e.target.value)}
                                className={`w-32 px-3 py-2 rounded-xl border outline-none ${
                                    isDark ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-300"
                                }`}
                            />
                            <Row>
                                <Button onClick={() => dispatch({ type: "addBy", payload: step })} variant="primary">
                                    Add +{step}
                                </Button>
                                <Button onClick={() => dispatch({ type: "set", payload: 0 })}>Set 0</Button>
                                <Button onClick={() => dispatch({ type: "set", payload: 100 })}>Set 100</Button>
                            </Row>
                        </div>
                    </div>
                </Card>

                <Card>
                    <h2 className="text-xl font-semibold mb-2">What you just used</h2>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                        <li>
                            <span className="font-semibold">useState</span> — remembered values (theme + step input).
                        </li>
                        <li>
                            <span className="font-semibold">useEffect</span> — did side effects (changed document.title, loaded/saved count).
                        </li>
                        <li>
                            <span className="font-semibold">useContext</span> — shared theme between components.
                        </li>
                        <li>
                            <span className="font-semibold">useReducer</span> — handled counter logic with clear actions.
                        </li>
                    </ul>
                </Card>

                <footer className="text-xs opacity-70 text-center pt-2">
                    Tip: Try toggling the theme, refreshing the page (count persists), and changing the step.
                </footer>
            </div>
        </div>
    );
}
