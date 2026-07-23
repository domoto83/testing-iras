import React from 'react';

interface TopicDetailModalProps {
  item: any | null;
  onClose: () => void;
  onOpenCalculator?: () => void;
  onOpenLogin?: () => void;
}

export const TopicDetailModal: React.FC<TopicDetailModalProps> = ({
  item,
  onClose,
  onOpenCalculator,
  onOpenLogin
}) => {
  if (!item) return null;

  const isDeadline = !!item.badge;
  const isArticle = !!item.type;

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 text-[#161c22]">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Header Badge & Category */}
        <div className="flex items-center gap-2 mb-3">
          {isDeadline && (
            <span className="bg-[#00244a] text-white px-3 py-1 rounded text-xs font-bold">
              {item.badge} Deadline
            </span>
          )}
          {isArticle && (
            <span className="bg-[#e3e9f0] text-[#434750] px-3 py-1 rounded text-xs font-bold uppercase">
              {item.type}
            </span>
          )}
          {item.category && (
            <span className="bg-[#d5e3ff] text-[#001c3b] px-3 py-1 rounded text-xs font-bold">
              {item.category}
            </span>
          )}
          <span className="text-xs text-gray-500 font-medium ml-auto">
            {item.date || 'Updated for YA 2026'}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-[#00244a] mb-4">
          {item.title}
        </h3>

        {/* Summary */}
        <div className="bg-[#f7f9ff] p-4 rounded-xl border border-[#cce3f5] mb-6 text-xs md:text-sm text-[#434750] leading-relaxed font-medium">
          {item.summary || item.description}
        </div>

        {/* Bullet details */}
        {item.details && item.details.length > 0 && (
          <div className="space-y-3 mb-6">
            <h4 className="font-bold text-sm text-[#00244a]">Key Regulations &amp; Guidelines:</h4>
            <ul className="space-y-2 text-xs md:text-sm text-gray-700">
              {item.details.map((detail: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-lg flex-shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article paragraphs */}
        {item.content && item.content.length > 0 && (
          <div className="space-y-3 mb-6 text-xs md:text-sm text-gray-700 leading-relaxed">
            {item.content.map((p: string, idx: number) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        )}

        {/* Action button triggers */}
        <div className="pt-4 border-t border-gray-200 flex flex-wrap gap-3 justify-end">
          {onOpenCalculator && (
            <button
              onClick={() => {
                onClose();
                onOpenCalculator();
              }}
              className="bg-[#cfe6f7] text-[#061e2b] px-4 py-2.5 rounded-lg font-bold text-xs hover:bg-blue-200 transition-colors"
            >
              Open Tax Calculator
            </button>
          )}

          {onOpenLogin && (
            <button
              onClick={() => {
                onClose();
                onOpenLogin();
              }}
              className="bg-[#00244a] text-white px-6 py-2.5 rounded-lg font-bold text-xs hover:bg-[#003a70] transition-colors"
            >
              File in myTax Portal
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
