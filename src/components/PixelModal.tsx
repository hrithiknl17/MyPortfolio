import { Mail, X } from 'lucide-react';

interface PixelModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
}

const PixelModal = ({ isOpen, onClose, title = "Maintenance Mode" }: PixelModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div
                className="bg-white border-4 border-black p-1 max-w-sm w-full animate-in zoom-in duration-200"
                style={{ boxShadow: '8px 8px 0 black' }}
            >
                {/* Header */}
                <div className="bg-black text-white px-3 py-1 flex justify-between items-center font-mono uppercase tracking-widest text-xs">
                    <span>{title}</span>
                    <button onClick={onClose} className="hover:bg-red-500 transition-colors">
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col items-center gap-4 text-center">
                    <div className="p-4 bg-primary border-4 border-black" style={{ boxShadow: '4px 4px 0 black' }}>
                        <Mail className="w-12 h-12 text-white" />
                    </div>

                    <div className="font-mono text-sm space-y-4">
                        <p className="font-bold uppercase text-lg">Oops! Sorry for the inconvenience!</p>
                        <p>
                            Our Netflix clone is currently under maintenance while we're making it even more awesome.
                        </p>
                        <p>
                            We'll be back soon with more popcorn and better features. Stay tuned! ✨
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="mt-2 px-6 py-2 bg-secondary border-2 border-black font-mono font-bold uppercase text-xs hover:bg-yellow-400 transition-colors"
                        style={{ boxShadow: '4px 4px 0 black' }}
                    >
                        Got it!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PixelModal;
