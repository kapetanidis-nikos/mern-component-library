import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SignUpForm from "./../components/Forms/SignUpForm";

const tabsContent = [
  {
    title: "Sign Up",
    value: "signup",
    content: <SignUpForm />,
  },
  {
    title: "Create Product",
    value: "createProduct",
    content: "Create Product",
  },
  {
    title: "Edit Product",
    value: "editProduct",
    content: "Edit Product",
  },
];

export default function FormsPage() {
  return (
    <Tabs defaultValue="signup" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        {tabsContent.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabsContent.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
