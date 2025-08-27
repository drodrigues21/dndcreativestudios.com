import { createContext, useContext, useMemo, useState } from "react";
import usersDB from "../data/usersDB";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
	const [user, setUser] = useState(() => {
		try {
			const stored = localStorage.getItem("authUser");
			return stored ? JSON.parse(stored) : null;
		} catch {
			return null;
		}
	});

	const login = (email, password) => {
		const found = usersDB.find(
			(u) => u.email === email && u.password === password
		);
		if (found) {
			const nextUser = { id: found.id, email: found.email };
			setUser(nextUser);
			try {
				localStorage.setItem("authUser", JSON.stringify(nextUser));
			} catch {}
			return { ok: true };
		}
		return { ok: false, error: "User doesn't exist" };
	};

	const logout = () => {
		setUser(null);
		try {
			localStorage.removeItem("authUser");
		} catch {}
	};

	const value = useMemo(
		() => ({ user, isAuthenticated: !!user, login, logout }),
		[user]
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error("useAuth must be used within AuthProvider");
	return ctx;
}
