import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CopyButton } from './CopyButton';
import { ArrowRight, GitCompare, GraduationCap, Monitor, Tablet, Smartphone } from 'lucide-react';
import type { FormData } from '@/data/curriculumData';



interface ComparativeViewProps {
  formsData: FormData[];
}

export function ComparativeView({ formsData }: ComparativeViewProps) {
  const [activeComparison, setActiveComparison] = useState('grammar');

  // Determine grid columns based on number of forms
  const getGridClasses = () => {
    const count = formsData.length;
    if (count === 2) return 'grid-cols-1 lg:grid-cols-2';
    if (count === 3) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    if (count === 4) return 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4';
    if (count >= 5) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5';
    return 'grid-cols-1';
  };

  // Get column width hint for user
  const getViewHint = () => {
    const count = formsData.length;
    if (count <= 2) return { icon: <Monitor className="h-4 w-4" />, text: 'Desktop & Tablet optimized' };
    if (count === 3) return { icon: <Tablet className="h-4 w-4" />, text: 'Tablet landscape recommended' };
    return { icon: <Smartphone className="h-4 w-4" />, text: 'Scroll horizontally on small screens' };
  };

  const renderGrammarComparison = () => {
    return (
      <div className={`grid ${getGridClasses()} gap-4`}>
        {formsData.map((form) => (
          <Card key={form.form} className="border-l-4 border-l-amber-700 flex flex-col">
            <CardHeader className="py-3 flex-shrink-0">
              <CardTitle className="text-base flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Form {form.form}
                <Badge variant="outline" className="ml-auto text-xs">{form.cefrLevel}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 p-0">
              <ScrollArea className="h-[500px]">
                <div className="p-4 space-y-2">
                  {form.grammar.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 group p-2 rounded hover:bg-muted/50 transition-colors">
                      <ArrowRight className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm flex-1">{item}</span>
                      <CopyButton 
                        text={item}
                        className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                        size="sm"
                      />
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  const renderVocabularyComparison = () => {
    // Get all unique categories across forms
    const allCategories = new Set<string>();
    formsData.forEach(form => {
      Object.keys(form.vocabulary).forEach(cat => allCategories.add(cat));
    });

    return (
      <div className={`grid ${getGridClasses()} gap-4`}>
        {formsData.map((form) => (
          <Card key={form.form} className="border-l-4 border-l-teal-500 flex flex-col">
            <CardHeader className="py-3 flex-shrink-0">
              <CardTitle className="text-base flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Form {form.form}
                <Badge variant="outline" className="ml-auto text-xs">{form.cefrLevel}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 p-0">
              <ScrollArea className="h-[500px]">
                <div className="p-4 space-y-4">
                  {Object.entries(form.vocabulary).map(([category, words], catIndex) => (
                    <div key={catIndex} className="border rounded-lg overflow-hidden">
                      <div className="bg-muted/50 px-3 py-2 flex items-center justify-between">
                        <span className="text-sm font-medium">{category}</span>
                        <CopyButton 
                          text={`${category}: ${words.join(', ')}`}
                          size="sm"
                        />
                      </div>
                      <div className="p-3">
                        <div className="flex flex-wrap gap-1">
                          {words.map((word, wordIndex) => (
                            <Badge 
                              key={wordIndex} 
                              variant="secondary"
                              className="text-xs cursor-pointer hover:bg-primary/20 transition-colors"
                              onClick={() => navigator.clipboard.writeText(word)}
                            >
                              {word}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  const renderStandardsComparison = () => {
    return (
      <div className={`grid ${getGridClasses()} gap-4`}>
        {formsData.map((form) => (
          <Card key={form.form} className="border-l-4 border-l-gray-400 flex flex-col">
            <CardHeader className="py-3 flex-shrink-0">
              <CardTitle className="text-base flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Form {form.form}
                <Badge variant="outline" className="ml-auto text-xs">{form.cefrLevel}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 p-0">
              <ScrollArea className="h-[500px]">
                <div className="p-4 space-y-4">
                  {form.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="border rounded-lg overflow-hidden">
                      <div className="bg-muted/50 px-3 py-2">
                        <span className="text-sm font-medium">{skill.skill}</span>
                      </div>
                      <div className="p-3 space-y-2">
                        {skill.standards.map((standard, idx) => (
                          <div key={idx} className="flex items-start gap-2 group">
                            <Badge variant="outline" className="text-xs flex-shrink-0 mt-0.5">
                              {standard.code}
                            </Badge>
                            <span className="text-sm flex-1">{standard.description}</span>
                            <CopyButton 
                              text={`${standard.code}: ${standard.description}`}
                              className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                              size="sm"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  const renderTextTypesComparison = () => {
    return (
      <div className={`grid ${getGridClasses()} gap-4`}>
        {formsData.map((form) => (
          <Card key={form.form} className="border-l-4 border-l-orange-500 flex flex-col">
            <CardHeader className="py-3 flex-shrink-0">
              <CardTitle className="text-base flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Form {form.form}
                <Badge variant="outline" className="ml-auto text-xs">{form.cefrLevel}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 p-0">
              <ScrollArea className="h-[500px]">
                <div className="p-4 space-y-2">
                  {form.textTypes.map((type, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 rounded hover:bg-muted/50 transition-colors group">
                      <span className="text-sm">{type}</span>
                      <CopyButton 
                        text={type}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        size="sm"
                      />
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  const viewHint = getViewHint();

  return (
    <Card className="border-2 border-primary/10">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GitCompare className="h-5 w-5 text-primary" />
            Comparative Analysis
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {viewHint.icon}
            <span className="hidden sm:inline">{viewHint.text}</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeComparison} onValueChange={setActiveComparison}>
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="grammar">Grammar</TabsTrigger>
            <TabsTrigger value="vocabulary">Vocabulary</TabsTrigger>
            <TabsTrigger value="standards">Standards</TabsTrigger>
            <TabsTrigger value="texttypes">Text Types</TabsTrigger>
          </TabsList>

          <TabsContent value="grammar" className="mt-0">
            {renderGrammarComparison()}
          </TabsContent>

          <TabsContent value="vocabulary" className="mt-0">
            {renderVocabularyComparison()}
          </TabsContent>

          <TabsContent value="standards" className="mt-0">
            {renderStandardsComparison()}
          </TabsContent>

          <TabsContent value="texttypes" className="mt-0">
            {renderTextTypesComparison()}
          </TabsContent>
        </Tabs>

        {/* View Legend */}
        <div className="mt-6 pt-4 border-t">
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="font-medium">View Guide:</span>
            <div className="flex items-center gap-1">
              <Monitor className="h-4 w-4" />
              <span>2 forms = 2 columns</span>
            </div>
            <div className="flex items-center gap-1">
              <Tablet className="h-4 w-4" />
              <span>3 forms = 3 columns</span>
            </div>
            <div className="flex items-center gap-1">
              <Smartphone className="h-4 w-4" />
              <span>4-5 forms = responsive scroll</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
