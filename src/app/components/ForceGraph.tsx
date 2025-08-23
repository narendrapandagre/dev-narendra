"use client";

import React, { useState, useRef, useEffect } from "react";
import { GraphData, NodeObject, LinkObject } from "react-force-graph-2d";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

// ✅ Dynamic import
const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), {
  ssr: false,
});

// ✅ Graph Data
const graphData: GraphData = {
  nodes: [
    { id: "Home", icon: "🏠" },
    { id: "About", icon: "👤" },
    { id: "Projects", icon: "</>" },
    { id: "Blog", icon: "📖" },
    { id: "Resume", icon: "📄" },
    { id: "Contact", icon: "✉️" },
  ],
  links: [
    { source: "Home", target: "About" },
    { source: "Home", target: "Projects" },
    { source: "Home", target: "Blog" },
    { source: "Home", target: "Resume" },
    { source: "Home", target: "Contact" },
  ],
};

export default function ForceGraphOverlay() {
  const [open, setOpen] = useState(false);
  const [hoverNode, setHoverNode] = useState<NodeObject | null>(null);
  const fgRef = useRef<any>(null);
  const router = useRouter();

  useEffect(() => {
  if (open && fgRef.current) {
    const distance = 250;

    // Home node fix center
    const homeNode = graphData.nodes.find((n) => n.id === "Home");
    if (homeNode) {
      homeNode.fx = 0;
      homeNode.fy = 0;
    }

    // Baaki nodes circle me distribute
    const others = graphData.nodes.filter((n) => n.id !== "Home");
    others.forEach((node, i) => {
      const angle = (i / others.length) * 2 * Math.PI;
      node.fx = distance * Math.cos(angle);
      node.fy = distance * Math.sin(angle);
    });

    // Disable forces
    fgRef.current.d3Force("charge", null);
    fgRef.current.d3Force("link", null);

    // ✅ Render hone ke baad center me fit karo
    setTimeout(() => {
      if (fgRef.current) {
        fgRef.current.zoomToFit(400, 50);
      }
    }, 300);
  }
}, [open]);

  // ✅ Navigation on click
  const handleNodeClick = (node: NodeObject) => {
    const id = String(node.id).toLowerCase();
    router.push(`/${id === "home" ? "" : id}`);
    setOpen(false);
  };

  // ✅ Helper: check if link is connected to hover node
  const isLinkConnected = (link: LinkObject, node: NodeObject) => {
    return link.source === node || link.target === node;
  };

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "12px 16px",
            borderRadius: "50%",
            border: "none",
            background: "blue",
            color: "white",
            cursor: "pointer",
            zIndex: 1000,
          }}
        >
          ☰
        </button>
      )}

      {/* Fullscreen Overlay */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 2000,
            overflow: "hidden",
          }}
        >
          {/* ✅ Dark Universe Background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at center, #0d0d2b, #000000 80%)",
              zIndex: 0,
            }}
          >
            {/* Stars layer */}
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage:
                  "radial-gradient(white 1px, transparent 1px), radial-gradient(white 1px, transparent 1px)",
                backgroundSize: "50px 50px",
                backgroundPosition: "0 0, 25px 25px",
                opacity: 0.3,
              }}
            />
          </div>

          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "white",
              border: "none",
              padding: "8px 12px",
              borderRadius: "8px",
              cursor: "pointer",
              zIndex: 2100,
            }}
          >
            ✖ Close
          </button>

          {/* Graph */}
          <ForceGraph2D
            ref={fgRef}
            graphData={graphData}
            nodeRelSize={8} // 👈 icons thode chhote
            enableZoomInteraction={false} // 👈 zoom disable
            enablePanInteraction={false} // 👈 pan disable
            onNodeClick={handleNodeClick}
            onNodeHover={(node) => setHoverNode(node || null)}
            linkColor={(link) =>
              hoverNode && isLinkConnected(link, hoverNode)
                ? "yellow"
                : "rgba(255,255,255,0.2)"
            }
            nodeCanvasObject={(node: any, ctx, globalScale) => {
              const label = node.id;
              const icon = node.icon || "●";
              const fontSize = 14 / globalScale;

              const isHighlighted =
                hoverNode &&
                (hoverNode.id === node.id ||
                  graphData.links.some(
                    (l) =>
                      ((l.source as any).id === hoverNode.id &&
                        (l.target as any).id === node.id) ||
                      ((l.target as any).id === hoverNode.id &&
                        (l.source as any).id === node.id)
                  ));

              // Node Circle (smaller now)
              ctx.beginPath();
              ctx.arc(node.x!, node.y!, 15, 0, 2 * Math.PI, false);
              ctx.fillStyle = isHighlighted ? "yellow" : "gray";
              ctx.fill();

              // Icon
              ctx.font = `${12 / globalScale}px Sans-Serif`;
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillStyle = "black";
              ctx.fillText(icon, node.x!, node.y!);

              // Label under node
              ctx.font = `${fontSize}px Sans-Serif`;
              ctx.fillStyle = "white";
              ctx.fillText(label, node.x!, node.y! + 40);
            }}
          />
        </div>
      )}
    </>
  );
}
