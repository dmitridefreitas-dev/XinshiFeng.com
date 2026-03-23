'use client';

export default function GridBackground() {
  return (
    <>
      {/* Faint dot-grid — main */}
      <div className="dot-grid-layer" aria-hidden="true" />
      {/* Very fine secondary grid */}
      <div className="dot-grid-layer-fine" aria-hidden="true" />
      {/* Warm paper gradient washes at edges */}
      <div className="paper-wash" aria-hidden="true" />
    </>
  );
}
