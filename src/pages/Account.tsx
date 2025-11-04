import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Account = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-2xl">
          <h1 className="text-4xl font-bold mb-8">My Account</h1>
          
          <Tabs defaultValue="login">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Sign In</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <div className="space-y-4 py-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your password" />
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-[hsl(var(--promo-text))] font-bold">
                  Sign In
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="register">
              <div className="space-y-4 py-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div>
                  <Label htmlFor="email-reg">Email</Label>
                  <Input id="email-reg" type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <Label htmlFor="password-reg">Password</Label>
                  <Input id="password-reg" type="password" placeholder="Create a password" />
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-[hsl(var(--promo-text))] font-bold">
                  Create Account
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8 p-6 bg-accent/10 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Join Rewards</h2>
            <p className="text-muted-foreground mb-4">
              Sign up for our rewards program and get exclusive perks, early access to sales, and more!
            </p>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Account;
