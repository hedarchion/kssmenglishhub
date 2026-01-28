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

const skillLabels: Record<string, string> = {
  'Listening': 'Listen',
  'Speaking': 'Speak',
  'Reading': 'Read',
  'Writing': 'Write',
  'Literature in Action': 'Lit',
};

function LearningStandardsList({ standards }: { standards: { code: string; description: string }[] }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="mt-3 border rounded-lg border-gray-200 dark:border-gray-700 overflow-hidden">
      <button 
        onClick={() => setExpanded(!expanded)}
        className="w-full px-3 py-2.5 flex items-center justify-between text-left bg-gray-100/50 dark:bg-gray-800/50"
      >
        <span className="text-sm font-medium text-foreground">Learning Standards ({standards.length})</span>
        {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>
      {expanded && (
        <div className="p-2 space-y-1 bg-gray-50/50 dark:bg-gray-900/20">
          {standards.map((standard, index) => (
            <div key={index} className="flex items-start gap-2 group p-2 rounded hover:bg-white/50 dark:hover:bg-black/20">
              <Badge variant="outline" className="text-[10px] px-1.5 h-5 flex-shrink-0 font-mono">
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
      <div className="space-y-4">
        {skill.standards.map((standard, index) => (
          <div key={index} className="group p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/20">
            <div className="flex items-start gap-3">
              <Badge className="text-xs px-2 h-6 flex-shrink-0 font-mono bg-gray-100 dark:bg-gray-800 text-foreground">
                {standard.code}
              </Badge>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-sm leading-relaxed">{standard.description}</span>
                  <CopyButton 
                    text={`${standard.code}: ${standard.description}`}
                    className="opacity-0 group-hover:opacity-100 flex-shrink-0"
                  />
                </div>
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
    <div className="space-y-1">
      {formData.grammar.map((item, index) => (
        <div key={index} className="flex items-start gap-3 group p-3 rounded hover:bg-muted/50">
          <span className="text-xs text-muted-foreground w-6 flex-shrink-0">{index + 1}</span>
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
    <div className="space-y-3">
      {Object.entries(formData.vocabulary).map(([category, words]) => (
        <div key={category} className="border rounded-lg overflow-hidden">
          <div className="bg-muted/30 px-3 py-2.5 flex items-center justify-between">
            <span className="text-sm font-medium">{category}</span>
            <div className="flex items-center gap-1">
              <CopyButton text={words.join(', ')} />
              <CopyAllButton 
                text={`${category}:\n${words.join(', ')}`} 
                label="Copy" 
              />
            </div>
          </div>
          <div className="p-3">
            <div className="flex flex-wrap gap-1.5">
              {words.map((word, idx) => (
                <Badge 
                  key={idx} 
                  variant="secondary"
                  className="text-xs px-2.5 py-1 cursor-pointer hover:bg-primary/20"
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {formData.textTypes.map((type, index) => (
        <div key={index} className="flex items-center justify-between p-3 rounded border hover:border-primary/30 group">
          <span className="text-sm">{type}</span>
          <CopyButton text={type} className="opacity-0 group-hover:opacity-100" />
        </div>
      ))}
    </div>
  );

  const TabContent = ({ value, label, children }: { value: string; label: string; children: React.ReactNode }) => (
    <TabsContent value={value} className="mt-3">
      <Card className="border-gray-200 dark:border-gray-700">
        <CardHeader className="py-3 px-4 bg-gray-50/50 dark:bg-gray-900/20 flex flex-row items-center justify-between">
          <span className="text-sm font-medium text-foreground">{label}</span>
          {children}
        </CardHeader>
        <CardContent className="p-3 sm:p-4">
          {value === 'listening' && renderStandards('Listening')}
          {value === 'speaking' && renderStandards('Speaking')}
          {value === 'reading' && renderStandards('Reading')}
          {value === 'writing' && renderStandards('Writing')}
          {value === 'literature' && renderStandards('Literature in Action')}
          {value === 'grammar' && renderGrammar()}
          {value === 'vocabulary' && renderVocabulary()}
          {value === 'texttypes' && renderTextTypes()}
        </CardContent>
      </Card>
    </TabsContent>
  );

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      {/* Mobile: Scrollable horizontal tabs */}
      <div className="block sm:hidden overflow-x-auto pb-2 -mx-4 px-4">
        <TabsList className="inline-flex h-auto min-h-[2.75rem] p-1 gap-1 w-auto">
          {(['listening', 'speaking', 'reading', 'writing', 'literature', 'grammar', 'vocabulary', 'texttypes'] as const).map((tab) => (
            <TabsTrigger 
              key={tab} 
              value={tab} 
              className="text-xs gap-1.5 py-2 px-3 whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {tab === 'listening' && skillIcons['Listening']}
              {tab === 'speaking' && skillIcons['Speaking']}
              {tab === 'reading' && skillIcons['Reading']}
              {tab === 'writing' && skillIcons['Writing']}
              {tab === 'literature' && skillIcons['Literature in Action']}
              {tab === 'grammar' && <Languages className="h-4 w-4" />}
              {tab === 'vocabulary' && <Library className="h-4 w-4" />}
              {tab === 'texttypes' && <FileText className="h-4 w-4" />}
              <span>{skillLabels[tab === 'literature' ? 'Literature in Action' : tab] || tab}</span>
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {/* Desktop: 4x2 grid */}
      <div className="hidden sm:block">
        <TabsList className="grid grid-cols-4 lg:grid-cols-8 h-auto min-h-[2.75rem] p-1 gap-1">
          <TabsTrigger value="listening" className="text-xs gap-1.5 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            {skillIcons['Listening']}
            <span>Listen</span>
          </TabsTrigger>
          <TabsTrigger value="speaking" className="text-xs gap-1.5 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            {skillIcons['Speaking']}
            <span>Speak</span>
          </TabsTrigger>
          <TabsTrigger value="reading" className="text-xs gap-1.5 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            {skillIcons['Reading']}
            <span>Read</span>
          </TabsTrigger>
          <TabsTrigger value="writing" className="text-xs gap-1.5 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            {skillIcons['Writing']}
            <span>Write</span>
          </TabsTrigger>
          <TabsTrigger value="literature" className="text-xs gap-1.5 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            {skillIcons['Literature in Action']}
            <span>Lit</span>
          </TabsTrigger>
          <TabsTrigger value="grammar" className="text-xs gap-1.5 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <Languages className="h-4 w-4" />
            <span>Grammar</span>
          </TabsTrigger>
          <TabsTrigger value="vocabulary" className="text-xs gap-1.5 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <Library className="h-4 w-4" />
            <span>Vocab</span>
          </TabsTrigger>
          <TabsTrigger value="texttypes" className="text-xs gap-1.5 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <FileText className="h-4 w-4" />
            <span>Texts</span>
          </TabsTrigger>
        </TabsList>
      </div>

      <TabContent value="listening" label="Listening Standards">
        <CopyAllButton text={getAllStandardsText(formData, 'Listening')} label="Copy All" />
      </TabContent>
      <TabContent value="speaking" label="Speaking Standards">
        <CopyAllButton text={getAllStandardsText(formData, 'Speaking')} label="Copy All" />
      </TabContent>
      <TabContent value="reading" label="Reading Standards">
        <CopyAllButton text={getAllStandardsText(formData, 'Reading')} label="Copy All" />
      </TabContent>
      <TabContent value="writing" label="Writing Standards">
        <CopyAllButton text={getAllStandardsText(formData, 'Writing')} label="Copy All" />
      </TabContent>
      <TabContent value="literature" label="Literature in Action Standards">
        <CopyAllButton text={getAllStandardsText(formData, 'Literature in Action')} label="Copy All" />
      </TabContent>
      <TabContent value="grammar" label="Grammar Topics">
        <CopyAllButton text={getAllGrammarText(formData)} label="Copy All Grammar" />
      </TabContent>
      <TabContent value="vocabulary" label="Vocabulary by Category">
        <CopyAllButton text={getAllVocabularyText(formData)} label="Copy All Vocab" />
      </TabContent>
      <TabContent value="texttypes" label="Suggested Text Types">
        <CopyAllButton text={getAllTextTypesText(formData)} label="Copy All Types" />
      </TabContent>
    </Tabs>
  );
}
