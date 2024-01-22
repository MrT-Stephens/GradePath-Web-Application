"use client";

import React from "react";

export default function ErrorMessageBox({ message, onClose }) {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="fixed top-0 left-0 w-full h-full bg-black opacity-75"></div>
            <div className="bg-red-500 shadow-2xl p-8 rounded-2xl z-50">
                <h1 className="text-2xl font-bold mb-2 underline">Error</h1>
                <p className="mb-2">{message}</p>
                <button
                    className="mt-2 bg-slate-600 text-white px-2 py-2 rounded hover:opacity-75"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
}
