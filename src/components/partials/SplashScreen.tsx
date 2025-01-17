import { BarChart2, Home, Users, Wallet } from "lucide-react";
import { Button } from "../ui/button";
import { useCallback } from 'react';
import { useTonConnectUI, useTonWallet, SendTransactionRequest } from '@tonconnect/ui-react';
import { toast } from 'react-toastify';

export default function SplashScreen() {
  const wallet = useTonWallet();
    console.log(wallet)
    const [tonConnectUI] = useTonConnectUI();

    const transaction: SendTransactionRequest = {
        validUntil: Date.now() + 5 * 60 * 1000,
        messages: [
            {
                address:
                    "0QDN8vag48oteAU3hqHnH6R16Ofo5U8snOT7812x2IjL3Fo2", 
                amount: "20000000",
            },
        ],
    };
    console.log(transaction)
    
    const disconnectWallet = useCallback(async () => {
        try {
            if (tonConnectUI) {
                await tonConnectUI.disconnect();
                // if (tonAddress) {
                //     tonAddress.style.display = 'none';
                // }
            }
        } catch (err: any) {
            toast.error(err?.message || 'Something went wrong!');
        }
    }, [tonConnectUI]);
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Snow effect */}
      {/* {snowflakes.map((_, i) => (
        <Snowflake key={i} delay={i * 0.2} />
      ))} */}

      {/* Header */}
      <div className="flex justify-between items-center p-6">
        <div className="flex items-center gap-2">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Qo2RpToBaU0ukQs85HadvCCwbT7xvH.png"
            alt="Dog Logo"
            className="w-12 h-12"
          />
          <div>
            <h1 className="text-2xl font-bold text-white">New Year</h1>
            <p className="text-xl text-white/90">Is Coming...</p>
          </div>
        </div>
        <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6 py-2">
          Receive
        </Button>
      </div>

      <div className="flex flex-col items-center justify-center mt-8 px-4">
        <Button 
          onClick={() => tonConnectUI.openModal()}
          className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 mb-12 flex items-center gap-2"
        >
          <Wallet className="w-5 h-5" />
          Connect wallet
        </Button>
        <div
                        onClick={disconnectWallet}
                        className='w-40 h-[40px] bg-[#000] text-white text-sm flex items-center justify-center rounded-[80px] cursor-pointer'
                    >
                        Disconnect Wallet
                    </div>
        <img
            src="/images/dogs.png"
            alt="Dog with Santa Hat"
            className="w-32 h-32 py-3"
          />
       
        

        <div

          className="text-center mb-8"
        >
          <h2 className="text-5xl font-bold mb-2">824,179</h2>
          <p className="text-2xl text-gray-400">$DOGS</p>
        </div>

        <Button 
          className="w-full max-w-md bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl py-6 text-xl font-semibold mb-8"
        >
          Claim New Year&apos;s Gift
        </Button>

        <div className="w-full max-w-md bg-white/5 rounded-2xl p-4 mb-12">
          <div className="flex items-center gap-2 text-white/90">
            <BarChart2 className="w-5 h-5" />
            <span>Token claim hints</span>
            <div className="ml-auto w-2 h-2 rounded-full bg-green-500" />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-white/10">
        <nav className="flex justify-around p-4">
          <Button variant="ghost" className="flex flex-col items-center gap-1 text-white">
            <Home className="w-6 h-6" />
            <span className="text-sm">Home</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1 text-gray-500 hover:text-white/90">
            <BarChart2 className="w-6 h-6" />
            <span className="text-sm">Leaderboard</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1 text-gray-500 hover:text-white/90">
            <Users className="w-6 h-6" />
            <span className="text-sm">Friends</span>
          </Button>
        </nav>
      </div>
    </div>
  );
}
