
import React, { useState } from "react";
import { ThemeProvider, useTheme } from "../library/index";
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Select,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
  Tabs,
  Tab,
  TabPanel,
  Toggle,
  Skeleton,
  Avatar,
  AvatarImage,
  AvatarFallback,
  ThemeVariant,
  ComponentVariant
} from "../library/index";

// Demo component to showcase the component library
const ComponentDemo = () => {
  const { theme, variant, setTheme, setVariant } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const [toggleState, setToggleState] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">React Component Library</h1>
        <p className="text-xl text-muted-foreground">
          Modern, themeable components with multiple style variants
        </p>
      </div>
      
      {/* Theme Controls */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Theme Configuration</CardTitle>
          <CardDescription>Customize theme and component variants</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium mb-2 block">Theme</label>
              <Select 
                value={theme} 
                onChange={(e) => setTheme(e.target.value as ThemeVariant)}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Style Variant</label>
              <Select 
                value={variant} 
                onChange={(e) => setVariant(e.target.value as ComponentVariant)}
              >
                <option value="minimalist">Minimalist</option>
                <option value="outline">Outline</option>
                <option value="shadow">Shadow</option>
                <option value="filled">Filled</option>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Button Showcase */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Buttons</CardTitle>
          <CardDescription>Button component with various styles</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </CardContent>
      </Card>
      
      {/* Input Showcase */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Inputs</CardTitle>
          <CardDescription>Text input component</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Default Input</label>
            <Input placeholder="Type something..." />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Ghost Input</label>
            <Input placeholder="Ghost input..." variant="ghost" />
          </div>
        </CardContent>
      </Card>
      
      {/* Toggle Showcase */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Toggle</CardTitle>
          <CardDescription>Toggle component</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Toggle 
            pressed={toggleState} 
            onPressedChange={setToggleState}
          >
            {toggleState ? "On" : "Off"}
          </Toggle>
          <Toggle 
            pressed={toggleState}
            onPressedChange={setToggleState} 
            variant="outline"
          >
            {toggleState ? "Enabled" : "Disabled"}
          </Toggle>
        </CardContent>
      </Card>
      
      {/* Tabs Showcase */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Tabs</CardTitle>
          <CardDescription>Tabs component</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Default Tabs</h3>
            <Tabs>
              <Tab 
                id="tab1" 
                isActive={activeTab === "tab1"} 
                onClick={setActiveTab}
              >
                Tab 1
              </Tab>
              <Tab 
                id="tab2" 
                isActive={activeTab === "tab2"} 
                onClick={setActiveTab}
              >
                Tab 2
              </Tab>
              <Tab 
                id="tab3" 
                isActive={activeTab === "tab3"} 
                onClick={setActiveTab}
              >
                Tab 3
              </Tab>
            </Tabs>
            <TabPanel isActive={activeTab === "tab1"}>
              <p>Content for Tab 1</p>
            </TabPanel>
            <TabPanel isActive={activeTab === "tab2"}>
              <p>Content for Tab 2</p>
            </TabPanel>
            <TabPanel isActive={activeTab === "tab3"}>
              <p>Content for Tab 3</p>
            </TabPanel>
          </div>
          
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Pills Tabs</h3>
            <Tabs variant="pills">
              <Tab 
                id="pill1" 
                variant="pills"
                isActive={activeTab === "pill1"} 
                onClick={setActiveTab}
              >
                Tab 1
              </Tab>
              <Tab 
                id="pill2" 
                variant="pills"
                isActive={activeTab === "pill2"} 
                onClick={setActiveTab}
              >
                Tab 2
              </Tab>
              <Tab 
                id="pill3" 
                variant="pills"
                isActive={activeTab === "pill3"} 
                onClick={setActiveTab}
              >
                Tab 3
              </Tab>
            </Tabs>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-2">Cards Tabs</h3>
            <Tabs variant="cards">
              <Tab 
                id="card1" 
                variant="cards"
                isActive={activeTab === "card1"} 
                onClick={setActiveTab}
              >
                Tab 1
              </Tab>
              <Tab 
                id="card2" 
                variant="cards"
                isActive={activeTab === "card2"} 
                onClick={setActiveTab}
              >
                Tab 2
              </Tab>
              <Tab 
                id="card3" 
                variant="cards"
                isActive={activeTab === "card3"} 
                onClick={setActiveTab}
              >
                Tab 3
              </Tab>
            </Tabs>
          </div>
        </CardContent>
      </Card>
      
      {/* Modal Showcase */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Modal</CardTitle>
          <CardDescription>Modal dialog component</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
          
          <Modal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)}
          >
            <ModalHeader>
              <ModalTitle>Modal Title</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <p>This is a modal dialog. It's styled based on the current theme variant.</p>
            </ModalBody>
            <ModalFooter>
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
              <Button onClick={() => setIsModalOpen(false)}>Continue</Button>
            </ModalFooter>
          </Modal>
        </CardContent>
      </Card>
      
      {/* Skeleton Showcase */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Skeleton</CardTitle>
          <CardDescription>Skeleton loading component</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Skeleton variant="card" className="h-32" />
            <Skeleton variant="card" className="h-32" />
            <Skeleton variant="card" className="h-32" />
          </div>
        </CardContent>
      </Card>
      
      {/* Avatar Showcase */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Avatar</CardTitle>
          <CardDescription>Avatar component with multiple sizes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 flex-wrap">
            <Avatar size="xs">
              <AvatarFallback>XS</AvatarFallback>
            </Avatar>
            <Avatar size="sm">
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarFallback>LG</AvatarFallback>
            </Avatar>
            <Avatar size="xl">
              <AvatarFallback>XL</AvatarFallback>
            </Avatar>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Wrapper with ThemeProvider
const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" defaultVariant="outline">
      <ComponentDemo />
    </ThemeProvider>
  );
};

export default Index;
