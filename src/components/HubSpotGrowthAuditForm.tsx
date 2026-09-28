"use client";
import { useEffect, useRef, useState } from "react";

export function HubSpotGrowthAuditForm() {
  const frame = useRef<HTMLIFrameElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );
  const [height, setHeight] = useState(800);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setStatus("error"), 20000);
    function onMessage(event: MessageEvent) {
      // Only our own wrapper document can resize this frame or mark it ready.
      if (
        event.origin !== window.location.origin ||
        event.source !== frame.current?.contentWindow ||
        !event.data ||
        typeof event.data !== "object"
      )
        return;
      if (
        event.data.type === "gm-form:resize" &&
        typeof event.data.height === "number" &&
        Number.isFinite(event.data.height)
      ) {
        setHeight(Math.min(4000, Math.max(300, event.data.height)));
      }
      if (event.data.type === "gm-form:ready") {
        clearTimeout(timeout);
        setStatus("ready");
      }
      if (event.data.type === "gm-form:error") {
        clearTimeout(timeout);
        setStatus("error");
      }
    }
    window.addEventListener("message", onMessage);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("message", onMessage);
    };
  }, [attempt]);

  function retry() {
    setStatus("loading");
    setHeight(800);
    setAttempt((value) => value + 1);
  }
  return (
    <div className="audit-embed">
      <div role="status" aria-live="polite">
        {status === "loading" && (
          <p className="form-loading">Loading the secure enquiry form…</p>
        )}
        {status === "error" && (
          <div className="form-error">
            <p>
              The enquiry form hasn’t loaded. Try again or email{" "}
              <a className="inline-link" href="mailto:info@go-massive.com">
                info@go-massive.com
              </a>{" "}
              with your brand, website and what you’d like to improve.
            </p>
            <button
              type="button"
              className="gm-button gm-button--red"
              onClick={retry}
            >
              Try loading again
            </button>
          </div>
        )}
      </div>
      <iframe
        ref={frame}
        key={attempt}
        src="/growth-audit-form.html"
        title="Go Massive growth audit enquiry form"
        style={{
          width: "100%",
          height,
          border: 0,
          display: status === "error" ? "none" : "block",
        }}
      />
      <noscript>
        <p>
          Please enable JavaScript to use the form, or email{" "}
          <a href="mailto:info@go-massive.com">info@go-massive.com</a>.
        </p>
      </noscript>
    </div>
  );
}
