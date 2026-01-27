import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CopyButton } from './CopyButton';
import { CopyAllButton } from './CopyAllButton';
import { ArrowRight, GraduationCap, Monitor, Languages, Library, FileText, Headphones, Mic, BookOpen, PenTool, Drama, ChevronDown, ChevronUp } from 'lucide-react';
import type { FormData } from '@/data/curriculumData';
import { getAllGrammarText, getAllVocabularyText, getAllTextTypesText, getAllStandardsText, getAllStandardsWithPerformanceText } from '@/data/curriculumData';

interface BrowseComparisonViewProps {
  formsData: FormData[];
}

const skillIcons: Record<string, React.ReactNode> = {
  'Listening': <Headphones className="h-4 w-4" />,
  'Speaking': <Mic className="h-4 w-4" />,
  'Reading': <BookOpen className="h-4 w-4" />,
  'Writing': <PenTool className="h-4 w-4" />,
  'Literature in Action': <Drama className="h-4 w-4" />,
};

function PerformanceStandards({ standards }: { standards: { band: string; descriptor: string }[] }) {
  const [expanded, setExpanded] = useState(false);

  if (!standards || standards.length === 0) return null;

  return (
    <div className="mt-1 border-t pt-1">
      <button 
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-foreground transition-colors"
      >
        {expanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
        Performance ({standards.length})
      </button>
      {expanded && (
        <div className="mt-1 space-y-0.5 pl-3 border-l border-muted">
          {standards.map((ps, idx) => (
            <div key={idx} className="flex items-start gap-1.5">
              <Badge variant="outline" className="text-[9px] px-1 h-4 flex-shrink-0">{ps.band}</Badge>
              <span className="text-[10px] text-muted-foreground leading-tight">{ps.descriptor}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function BrowseComparisonView({ formsData }: BrowseComparisonViewProps) {
  const [activeTab, setActiveTab] = useState('grammar');

  const getGridClasses = () => {
    const count = formsData.length;
    if (count === 2) return 'grid-cols-1 lg:grid-cols-2';
    if (count === 3) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    if (count === 4) return 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4';
    if (count >= 5) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5';
    return 'grid-cols-1';
  };

  const renderGrammarComparison = () => (
    <div className={`grid ${getGridClasses()} gap-3`}>
      {formsData.map((form) => (
        <Card key={form.form} className="border-l-2 border-l-primary">
          <CardHeader className="py-2 px-3 bg-muted/30 flex flex-row items-center justify-between">
            <CardTitle className="text-xs flex items-center gap-1.5">
              <GraduationCap className="h-3.5 w-3.5" />
              Form {form.form}
            </CardTitle>
            <div className="flex items-center gap-1">
              <Badge variant="outline" className="text-[10px] h-4 px-1">{form.cefrLevel}</Badge>
              <CopyAllButton text={getAllGrammarText(form)} label="Copy" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[400px]">
              <div className="p-2 space-y-0.5">
                {form.grammar.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 group p-1 rounded hover:bg-muted/50">
                    <ArrowRight className="h-3 w-3 mt-0.5 text-muted-foreground flex-shrink-0" />
                    <span className="text-xs leading-relaxed flex-1">{item}</span>
                    <CopyButton text={item} className="opacity-0 group-hover:opacity-100 h-5 w-5" />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderVocabularyComparison = () => (
    <div className={`grid ${getGridClasses()} gap-3`}>
      {formsData.map((form) => (
        <Card key={form.form} className="border-l-2 border-l-primary">
          <CardHeader className="py-2 px-3 bg-muted/30 flex flex-row items-center justify-between">
            <CardTitle className="text-xs flex items-center gap-1.5">
              <GraduationCap className="h-3.5 w-3.5" />
              Form {form.form}
            </CardTitle>
            <div className="flex items-center gap-1">
              <Badge variant="outline" className="text-[10px] h-4 px-1">{form.cefrLevel}</Badge>
              <CopyAllButton text={getAllVocabularyText(form)} label="Copy" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[400px]">
              <div className="p-2 space-y-2">
                {Object.entries(form.vocabulary).map(([category, words]) => (
                  <div key={category} className="border rounded overflow-hidden">
                    <div className="bg-muted/30 px-2 py-1 flex items-center justify-between">
                      <span className="text-xs font-medium">{category}</span>
                      <div className="flex gap-0.5">
                        <CopyButton text={words.join(', ')} className="h-5 w-5" />
                        <CopyAllButton text={`${category}:\n${words.join(', ')}`} label="Copy" />
                      </div>
                    </div>
                    <div className="p-1.5">
                      <div className="flex flex-wrap gap-1">
                        {words.map((word, idx) => (
                          <Badge key={idx} variant="secondary" className="text-[10px] px-1 py-0 h-4">
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

  const renderStandardsComparison = () => (
    <div className={`grid ${getGridClasses()} gap-3`}>
      {formsData.map((form) => (
        <Card key={form.form} className="border-l-2 border-l-primary">
          <CardHeader className="py-2 px-3 bg-muted/30 flex flex-row items-center justify-between">
            <CardTitle className="text-xs flex items-center gap-1.5">
              <GraduationCap className="h-3.5 w-3.5" />
              Form {form.form}
            </CardTitle>
            <div className="flex items-center gap-1">
              <Badge variant="outline" className="text-[10px] h-4 px-1">{form.cefrLevel}</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[400px]">
              <div className="p-2 space-y-2">
                {form.skills.map((skill, idx) => (
                  <div key={idx} className="border rounded overflow-hidden">
                    <div className="bg-muted/30 px-2 py-1 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        {skillIcons[skill.skill]}
                        <span className="text-xs font-medium">{skill.skill}</span>
                      </div>
                      <div className="flex gap-0.5">
                        <CopyAllButton text={getAllStandardsText(form, skill.skill)} label="Copy" />
                        <CopyAllButton text={getAllStandardsWithPerformanceText(form, skill.skill)} label="+Perf" />
                      </div>
                    </div>
                    <div className="p-1.5 space-y-1.5">
                      {skill.standards.map((std, sidx) => (
                        <div key={sidx} className="flex items-start gap-1.5 group">
                          <Badge variant="outline" className="text-[10px] px-1 h-4 flex-shrink-0 font-mono">
                            {std.code}
                          </Badge>
                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-1">
                              <span className="text-xs leading-relaxed">{std.description}</span>
                              <CopyButton 
                                text={`${std.code}: ${std.description}`}
                                className="opacity-0 group-hover:opacity-100 h-5 w-5"
                              />
                            </div>
                            <PerformanceStandards standards={std.performanceStandards || []} />
                          </div>
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

  const renderTextTypesComparison = () => (
    <div className={`grid ${getGridClasses()} gap-3`}>
      {formsData.map((form) => (
        <Card key={form.form} className="border-l-2 border-l-primary">
          <CardHeader className="py-2 px-3 bg-muted/30 flex flex-row items-center justify-between">
            <CardTitle className="text-xs flex items-center gap-1.5">
              <GraduationCap className="h-3.5 w-3.5" />
              Form {form.form}
            </CardTitle>
            <div className="flex items-center gap-1">
              <Badge variant="outline" className="text-[10px] h-4 px-1">{form.cefrLevel}</Badge>
              <CopyAllButton text={getAllTextTypesText(form)} label="Copy" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[400px]">
              <div className="p-2 space-y-0.5">
                {form.textTypes.map((type, idx) => (
                  <div key={idx} className="flex items-center justify-between p-1 rounded hover:bg-muted/50 group">
                    <span className="text-xs">{type}</span>
                    <CopyButton text={type} className="opacity-0 group-hover:opacity-100 h-5 w-5" />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <Card className="border">
      <CardHeader className="py-2 px-3">
        <CardTitle className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Monitor className="h-4 w-4 text-primary" />
            Side-by-Side Comparison
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 h-8 p-0.5 mb-3">
            <TabsTrigger value="grammar" className="text-xs gap-1">
              <Languages className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Grammar</span>
            </TabsTrigger>
            <TabsTrigger value="vocabulary" className="text-xs gap-1">
              <Library className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Vocab</span>
            </TabsTrigger>
            <TabsTrigger value="standards" className="text-xs gap-1">
              <BookOpen className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Standards</span>
            </TabsTrigger>
            <TabsTrigger value="texttypes" className="text-xs gap-1">
              <FileText className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Texts</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="grammar" className="mt-0">{renderGrammarComparison()}</TabsContent>
          <TabsContent value="vocabulary" className="mt-0">{renderVocabularyComparison()}</TabsContent>
          <TabsContent value="standards" className="mt-0">{renderStandardsComparison()}</TabsContent>
          <TabsContent value="texttypes" className="mt-0">{renderTextTypesComparison()}</TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
