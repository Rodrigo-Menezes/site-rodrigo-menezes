"use client"
{/*

codigo original que não salva o tema dark

import { useEffect, useState } from "react";

export default function useThemeSwitche() {

  const preferDarkQuery = "(prefer-color-scheme: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      if (userPref) {
        let check = userPref === "dark" ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
      } else {
        let check = mediaQuery.matches ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark")
    }
    if (mode === "light") {
      window.localStorage.setItem("theme", "ligth");
      document.documentElement.classList.remove("dark")
    }
  }, [mode])

  return (
    [mode, setMode]
  )

  */}

import { useEffect, useState } from "react";

export default function useThemeSwitche() {
  const preferDarkQuery = "(prefer-color-scheme: dark)";
  
  const [mode, setMode] = useState(() => {
    const isClient = typeof window !== "undefined";
    const userPref = isClient ? window.localStorage.getItem("theme") : null;
    return userPref || (isClient && window.matchMedia(preferDarkQuery).matches ? "dark" : "light");
  });

  useEffect(() => {
    const isClient = typeof window !== "undefined";
    if (!isClient) {
      return;
    }

    const mediaQuery = window.matchMedia(preferDarkQuery);

    const handleChange = () => {
      let check = mediaQuery.matches ? "dark" : "light";
      setMode(check);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const isClient = typeof window !== "undefined";
    if (!isClient) {
      return;
    }

    // Atualizar o modo na classe "dark" do elemento <html> quando o modo muda.
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Salvar o modo selecionado no localStorage toda vez que o estado do modo for alterado.
    window.localStorage.setItem("theme", mode);
  }, [mode]);

  return [mode, setMode];
}
  