import React from "react";

const TransactionModal = ({ isOpen, onClose, packageName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Kotak Modal */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl w-96 shadow-xl">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
          Upgrade {packageName}
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Selesaikan pembayaran untuk membuka akses premium.
        </p>

        <div className="bg-emerald-50 dark:bg-emerald-900 h-32 flex items-center justify-center rounded-lg mb-6 border-2 border-dashed border-emerald-200">
          <span className="text-emerald-700 dark:text-emerald-200">
            QRIS Placeholder
          </span>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-50"
          >
            Batal
          </button>
          <button className="flex-1 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
            Sudah Bayar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;
