import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FormSelector } from '@/components/FormSelector';
import { SkillTabs } from '@/components/SkillTabs';
import { QuickReference } from '@/components/QuickReference';
import { BrowseComparisonView } from '@/components/BrowseComparisonView';
import { QuizGame } from '@/components/QuizGame';
import { StandardsView } from '@/components/StandardsView';
import { curriculumData } from '@/data/curriculumData';
import { 
  GraduationCap, 
  BookOpen, 
  Lightbulb,
  Menu,
  GitCompare,
  Layers,
  Gamepad2,
  Target,
  BookText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

function App() {
  const [selectedForms, setSelectedForms] = useState<number[]>([1]);
  const [activeMainTab, setActiveMainTab] = useState<'browse' | 'reference' | 'quiz' | 'standards'>('browse');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [browseViewMode, setBrowseViewMode] = useState<'detailed' | 'compare'>('detailed');

  const handleFormSelect = (form: number) => {
    setSelectedForms(prev => {
      if (prev.includes(form)) {
        if (prev.length === 1) return prev;
        return prev.filter(f => f !== form);
      }
      return [...prev, form].sort();
    });
  };

  const getSelectedFormsData = () => {
    return curriculumData.filter(data => selectedForms.includes(data.form));
  };

  const handleViewModeChange = (value: string) => {
    if (value) {
      setBrowseViewMode(value as 'detailed' | 'compare');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-base font-bold tracking-tight">KSSM English Hub</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Forms 1-5 | CEFR</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-1">
            <Button 
              variant={activeMainTab === 'browse' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveMainTab('browse')}
              className="h-8 text-sm gap-1.5"
            >
              <BookOpen className="h-4 w-4" />
              Browse
            </Button>
            <Button 
              variant={activeMainTab === 'standards' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveMainTab('standards')}
              className="h-8 text-sm gap-1.5"
            >
              <BookText className="h-4 w-4" />
              Standards
            </Button>
            <Button 
              variant={activeMainTab === 'reference' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveMainTab('reference')}
              className="h-8 text-sm gap-1.5"
            >
              <Lightbulb className="h-4 w-4" />
              Reference
            </Button>
            <Button 
              variant={activeMainTab === 'quiz' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveMainTab('quiz')}
              className="h-8 text-sm gap-1.5"
            >
              <Gamepad2 className="h-4 w-4" />
              Quiz
            </Button>
          </nav>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[260px]">
              <div className="flex flex-col gap-2 mt-6">
                <Button 
                  variant={activeMainTab === 'browse' ? 'default' : 'ghost'}
                  onClick={() => { setActiveMainTab('browse'); setMobileMenuOpen(false); }}
                  className="justify-start gap-2"
                >
                  <BookOpen className="h-4 w-4" />
                  Browse
                </Button>
                <Button 
                  variant={activeMainTab === 'standards' ? 'default' : 'ghost'}
                  onClick={() => { setActiveMainTab('standards'); setMobileMenuOpen(false); }}
                  className="justify-start gap-2"
                >
                  <BookText className="h-4 w-4" />
                  Standards
                </Button>
                <Button 
                  variant={activeMainTab === 'reference' ? 'default' : 'ghost'}
                  onClick={() => { setActiveMainTab('reference'); setMobileMenuOpen(false); }}
                  className="justify-start gap-2"
                >
                  <Lightbulb className="h-4 w-4" />
                  Reference
                </Button>
                <Button 
                  variant={activeMainTab === 'quiz' ? 'default' : 'ghost'}
                  onClick={() => { setActiveMainTab('quiz'); setMobileMenuOpen(false); }}
                  className="justify-start gap-2"
                >
                  <Gamepad2 className="h-4 w-4" />
                  Quiz
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-4">
        {activeMainTab === 'browse' && (
          <div className="space-y-4">
            {/* Hero Section */}
            <section className="text-center space-y-2 py-3">
              <h2 className="text-2xl font-bold tracking-tight">KSSM English Language Curriculum</h2>
              <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                Learning standards, grammar, vocabulary for Forms 1-5. Select multiple forms to compare.
              </p>
              <div className="flex flex-wrap justify-center gap-1.5">
                {['A2 Mid', 'A2 High', 'B1 Low', 'B1 Mid', 'B1 High'].map((level, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {level}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Form Selector */}
            <FormSelector 
              selectedForms={selectedForms}
              onFormSelect={handleFormSelect}
            />

            {/* View Mode Toggle */}
            {selectedForms.length > 1 && (
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Badge variant="default" className="text-sm">
                    {selectedForms.length} Forms
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {selectedForms.join(', ')}
                  </span>
                </div>
                <ToggleGroup 
                  type="single" 
                  value={browseViewMode}
                  onValueChange={handleViewModeChange}
                  className="border rounded-lg p-1"
                >
                  <ToggleGroupItem value="detailed" aria-label="Detailed" className="gap-1.5 text-sm">
                    <Layers className="h-4 w-4" />
                    <span className="hidden sm:inline">Detailed</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="compare" aria-label="Compare" className="gap-1.5 text-sm">
                    <GitCompare className="h-4 w-4" />
                    <span className="hidden sm:inline">Compare</span>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            )}

            {/* Content Display */}
            {selectedForms.length > 0 ? (
              <div className="space-y-4">
                {browseViewMode === 'compare' && selectedForms.length > 1 ? (
                  <BrowseComparisonView formsData={getSelectedFormsData()} />
                ) : (
                  selectedForms.map((formNum) => {
                    const formData = curriculumData.find(d => d.form === formNum);
                    if (!formData) return null;

                    return (
                      <div key={formNum} className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge className="text-base px-3 py-0.5">Form {formNum}</Badge>
                          <Badge variant="outline" className="text-sm">
                            {formData.cefrLevel}
                          </Badge>
                        </div>
                        <SkillTabs formData={formData} />
                      </div>
                    );
                  })
                )}
              </div>
            ) : (
              <Card className="border-dashed">
                <CardContent className="py-8 text-center">
                  <BookOpen className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">Select a form to view content</p>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {activeMainTab === 'standards' && (
          <div className="space-y-4">
            <Card>
              <CardHeader className="py-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <BookText className="h-5 w-5 text-primary" />
                  Curriculum Standards
                </CardTitle>
                <CardDescription className="text-sm">
                  Content Standards → Learning Standards → Performance Standards
                </CardDescription>
              </CardHeader>
            </Card>
            <StandardsView />
          </div>
        )}

        {activeMainTab === 'reference' && (
          <div className="space-y-4">
            <Card>
              <CardHeader className="py-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  Quick Reference
                </CardTitle>
                <CardDescription className="text-sm">
                  Pupils' profile, HOTS levels, cross-curricular elements, and themes.
                </CardDescription>
              </CardHeader>
            </Card>
            <QuickReference />
          </div>
        )}

        {activeMainTab === 'quiz' && (
          <div className="space-y-4">
            <Card>
              <CardHeader className="py-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Target className="h-5 w-5 text-primary" />
                  Curriculum Mastery Challenge
                </CardTitle>
                <CardDescription className="text-sm">
                  Test your knowledge across 10 levels. Progress is saved locally.
                </CardDescription>
              </CardHeader>
            </Card>
            <QuizGame />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 mt-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <GraduationCap className="h-4 w-4" />
              <span className="font-medium">KSSM English Hub</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Forms 1-5</span>
              <span>CEFR</span>
              <span>SBELC</span>
            </div>
            <div className="text-xs">Kementerian Pendidikan Malaysia</div>
          </div>
          <div className="mt-3 pt-3 border-t text-center text-xs text-muted-foreground">
            Made by Ashrofu | Built using Kimi-K2.5
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
