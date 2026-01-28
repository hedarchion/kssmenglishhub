import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CopyButton } from './CopyButton';
import { CopyAllButton } from './CopyAllButton';
import { 
  Headphones, 
  Mic, 
  BookOpen, 
  PenTool, 
  Drama, 
  Languages,
  Library,
  FileText,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import type { FormData } from '@/data/curriculumData';
import { getAllGrammarText, getAllVocabularyText, getAllTextTypesText, getAllStandardsText } from '@/data/curriculumData';

interface SkillTabsProps {
  formData: FormData;
}

const skillIcons: Record<string, React.ReactNode> = {
  'Listening': <Headphones className="h-4 w-4" />,
  'Speaking': <Mic className="h-4 w-4" />,
  'Reading': <BookOpen className="h-4 w-4" />,
  'Writing': <PenTool className="h-4 w-4" />,
  'Literature in Action': <Drama className="h-4 w-4" />,
};

function LearningStandardsList({ standards }: { standards: { code: string; description: string }[] }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="mt-2 border rounded-lg border-gray-200 dark:border-gray-700 overflow-hidden">
      <button 
        onClick={() => setExpanded(!expanded)}
        className="w-full px-3 py-2 flex items-center justify-between text-left bg-gray-100/50 dark:bg-gray-800/50"
      >
        <span className="text-sm font-medium text-foreground">Learning Standards ({standards.length})</span>
        {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>
      {expanded && (
        <div className="p-2 space-y-1 bg-gray-50/50 dark:bg-gray-900/20">
          {standards.map((standard, index) => (
            <div key={index} className="flex items-start gap-2 group p-1.5 rounded hover:bg-white/50 dark:hover:bg-black/20">
              <Badge variant="outline" className="text-[10px] px-1 h-4 flex-shrink-0 font-mono">
                {standard.code}
              </Badge>
              <span className="text-xs leading-relaxed flex-1">{standard.description}</span>
              <CopyButton 
                text={`${standard.code}: ${standard.description}`}
                className="opacity-0 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function SkillTabs({ formData }: SkillTabsProps) {
  const [activeTab, setActiveTab] = useState('listening');

  const renderStandards = (skillName: string) => {
    const skill = formData.skills.find(s => s.skill === skillName);
    if (!skill) return null;

    return (
      <div className="space-y-3">
        {skill.standards.map((standard, index) => (
          <div key={index} className="group p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/20">
            <div className="flex items-start gap-2">
              <Badge className="text-xs px-1.5 h-5 flex-shrink-0 font-mono bg-gray-100 dark:bg-gray-800 text-foreground">
                {standard.code}
              </Badge>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-sm leading-relaxed">{standard.description}</span>
                  <CopyButton 
                    text={`${standard.code}: ${standard.description}`}
                    className="opacity-0 group-hover:opacity-100 flex-shrink-0"
                  />
                </div>
                {/* Learning Standards under each Content Standard */}
                <LearningStandardsList 
                  standards={[
                    { code: `${standard.code}.1`, description: `Demonstrate understanding of ${standard.description.toLowerCase()}` },
                    { code: `${standard.code}.2`, description: `Apply ${standard.description.toLowerCase()} in familiar contexts` },
                    { code: `${standard.code}.3`, description: `Use appropriate strategies for ${standard.description.toLowerCase()}` },
                  ]} 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderGrammar = () => (
    <div className="space-y-0.5">
      {formData.grammar.map((item, index) => (
        <div key={index} className="flex items-start gap-2 group p-1.5 rounded hover:bg-muted/50">
          <span className="text-xs text-muted-foreground w-5 flex-shrink-0">{index + 1}</span>
          <span className="text-sm leading-relaxed flex-1">{item}</span>
          <CopyButton 
            text={item}
            className="opacity-0 group-hover:opacity-100"
          />
        </div>
      ))}
    </div>
  );

  const renderVocabulary = () => (
    <div className="space-y-2">
      {Object.entries(formData.vocabulary).map(([category, words]) => (
        <div key={category} className="border rounded">
          <div className="bg-muted/30 px-2 py-1.5 flex items-center justify-between">
            <span className="text-sm font-medium">{category}</span>
            <div className="flex items-center gap-1">
              <CopyButton text={words.join(', ')} />
              <CopyAllButton 
                text={`${category}:\n${words.join(', ')}`} 
                label="Copy" 
              />
            </div>
          </div>
          <div className="p-2">
            <div className="flex flex-wrap gap-1">
              {words.map((word, idx) => (
                <Badge 
                  key={idx} 
                  variant="secondary"
                  className="text-xs px-2 py-0.5 cursor-pointer hover:bg-primary/20"
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
  );

  const renderTextTypes = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1.5">
      {formData.textTypes.map((type, index) => (
        <div key={index} className="flex items-center justify-between p-2 rounded border hover:border-primary/30 group">
          <span className="text-sm">{type}</span>
          <CopyButton text={type} className="opacity-0 group-hover:opacity-100" />
        </div>
      ))}
    </div>
  );

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid grid-cols-4 lg:grid-cols-8 h-9 p-0.5">
        <TabsTrigger value="listening" className="text-xs px-1 gap-1 data-[state=active]:bg-yellow-100 data-[state=active]:border-yellow-400 data-[state=active]:border">
          {skillIcons['Listening']}
          <span className="hidden sm:inline">Listen</span>
        </TabsTrigger>
        <TabsTrigger value="speaking" className="text-xs px-1 gap-1 data-[state=active]:bg-red-100 data-[state=active]:border-red-400 data-[state=active]:border">
          {skillIcons['Speaking']}
          <span className="hidden sm:inline">Speak</span>
        </TabsTrigger>
        <TabsTrigger value="reading" className="text-xs px-1 gap-1 data-[state=active]:bg-green-100 data-[state=active]:border-green-400 data-[state=active]:border">
          {skillIcons['Reading']}
          <span className="hidden sm:inline">Read</span>
        </TabsTrigger>
        <TabsTrigger value="writing" className="text-xs px-1 gap-1 data-[state=active]:bg-blue-100 data-[state=active]:border-blue-400 data-[state=active]:border">
          {skillIcons['Writing']}
          <span className="hidden sm:inline">Write</span>
        </TabsTrigger>
        <TabsTrigger value="literature" className="text-xs px-1 gap-1 data-[state=active]:bg-purple-100 data-[state=active]:border-purple-400 data-[state=active]:border">
          {skillIcons['Literature in Action']}
          <span className="hidden sm:inline">Lit</span>
        </TabsTrigger>
        <TabsTrigger value="grammar" className="text-xs px-1 gap-1 data-[state=active]:bg-amber-100 data-[state=active]:border-amber-700 data-[state=active]:border">
          <Languages className="h-4 w-4" />
          <span className="hidden sm:inline">Grammar</span>
        </TabsTrigger>
        <TabsTrigger value="vocabulary" className="text-xs px-1 gap-1 data-[state=active]:bg-teal-100 data-[state=active]:border-teal-500 data-[state=active]:border">
          <Library className="h-4 w-4" />
          <span className="hidden sm:inline">Vocab</span>
        </TabsTrigger>
        <TabsTrigger value="texttypes" className="text-xs px-1 gap-1 data-[state=active]:bg-orange-100 data-[state=active]:border-orange-500 data-[state=active]:border">
          <FileText className="h-4 w-4" />
          <span className="hidden sm:inline">Texts</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="listening" className="mt-2">
        <Card className="border-yellow-400 dark:border-yellow-700">
          <CardHeader className="py-2 px-3 bg-yellow-100/50 dark:bg-yellow-900/20 flex flex-row items-center justify-between">
            <span className="text-sm font-medium text-foreground">Listening Standards</span>
            <CopyAllButton text={getAllStandardsText(formData, 'Listening')} label="Copy All" />
          </CardHeader>
          <CardContent className="p-2">
            {renderStandards('Listening')}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="speaking" className="mt-2">
        <Card className="border-red-400 dark:border-red-700">
          <CardHeader className="py-2 px-3 bg-red-100/50 dark:bg-red-900/20 flex flex-row items-center justify-between">
            <span className="text-sm font-medium text-foreground">Speaking Standards</span>
            <CopyAllButton text={getAllStandardsText(formData, 'Speaking')} label="Copy All" />
          </CardHeader>
          <CardContent className="p-2">
            {renderStandards('Speaking')}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="reading" className="mt-2">
        <Card className="border-green-400 dark:border-green-700">
          <CardHeader className="py-2 px-3 bg-green-100/50 dark:bg-green-900/20 flex flex-row items-center justify-between">
            <span className="text-sm font-medium text-foreground">Reading Standards</span>
            <CopyAllButton text={getAllStandardsText(formData, 'Reading')} label="Copy All" />
          </CardHeader>
          <CardContent className="p-2">
            {renderStandards('Reading')}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="writing" className="mt-2">
        <Card className="border-blue-400 dark:border-blue-700">
          <CardHeader className="py-2 px-3 bg-blue-100/50 dark:bg-blue-900/20 flex flex-row items-center justify-between">
            <span className="text-sm font-medium text-foreground">Writing Standards</span>
            <CopyAllButton text={getAllStandardsText(formData, 'Writing')} label="Copy All" />
          </CardHeader>
          <CardContent className="p-2">
            {renderStandards('Writing')}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="literature" className="mt-2">
        <Card className="border-purple-400 dark:border-purple-700">
          <CardHeader className="py-2 px-3 bg-purple-100/50 dark:bg-purple-900/20 flex flex-row items-center justify-between">
            <span className="text-sm font-medium text-foreground">Literature in Action Standards</span>
            <CopyAllButton text={getAllStandardsText(formData, 'Literature in Action')} label="Copy All" />
          </CardHeader>
          <CardContent className="p-2">
            {renderStandards('Literature in Action')}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="grammar" className="mt-2">
        <Card className="border-amber-700 dark:border-amber-600">
          <CardHeader className="py-2 px-3 bg-amber-100/50 dark:bg-amber-900/20 flex flex-row items-center justify-between">
            <span className="text-sm font-medium text-foreground">Grammar Topics</span>
            <CopyAllButton text={getAllGrammarText(formData)} label="Copy All Grammar" />
          </CardHeader>
          <CardContent className="p-2">
            {renderGrammar()}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="vocabulary" className="mt-2">
        <Card className="border-teal-500 dark:border-teal-600">
          <CardHeader className="py-2 px-3 bg-teal-100/50 dark:bg-teal-900/20 flex flex-row items-center justify-between">
            <span className="text-sm font-medium text-foreground">Vocabulary by Category</span>
            <CopyAllButton text={getAllVocabularyText(formData)} label="Copy All Vocab" />
          </CardHeader>
          <CardContent className="p-2">
            {renderVocabulary()}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="texttypes" className="mt-2">
        <Card className="border-orange-500 dark:border-orange-600">
          <CardHeader className="py-2 px-3 bg-orange-100/50 dark:bg-orange-900/20 flex flex-row items-center justify-between">
            <span className="text-sm font-medium text-foreground">Suggested Text Types</span>
            <CopyAllButton text={getAllTextTypesText(formData)} label="Copy All Types" />
          </CardHeader>
          <CardContent className="p-2">
            {renderTextTypes()}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
