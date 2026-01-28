import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

interface FormSelectorProps {
  selectedForms: number[];
  onFormSelect: (form: number) => void;
  maxSelection?: number;
}

export function FormSelector({ selectedForms, onFormSelect, maxSelection = 5 }: FormSelectorProps) {
  const forms = [1, 2, 3, 4, 5];

  const getCEFRLevel = (form: number) => {
    const levels: Record<number, string> = {
      1: 'A2 Mid',
      2: 'A2 High',
      3: 'B1 Low',
      4: 'B1 Mid',
      5: 'B1 High'
    };
    return levels[form];
  };

  return (
    <Card className="border">
      <CardContent className="p-4 sm:p-5">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium">Select Form(s)</span>
        </div>
        <div className="grid grid-cols-5 gap-2 sm:gap-3">
          {forms.map((form) => {
            const isSelected = selectedForms.includes(form);
            const canSelect = selectedForms.length < maxSelection || isSelected;
            
            return (
              <Button
                key={form}
                variant={isSelected ? 'default' : 'outline'}
                onClick={() => onFormSelect(form)}
                disabled={!canSelect && !isSelected}
                className={`
                  h-auto py-3 px-2 sm:px-3 transition-all min-h-[3.5rem]
                  ${isSelected ? 'shadow-sm ring-2 ring-primary/20' : ''}
                `}
              >
                <div className="flex flex-col items-center leading-tight gap-0.5">
                  <span className="font-semibold text-sm sm:text-base">{form}</span>
                  <span className={`text-[10px] sm:text-xs ${isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                    {getCEFRLevel(form)}
                  </span>
                </div>
              </Button>
            );
          })}
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          {selectedForms.length === 0 ? 'Select at least one form' : `${selectedForms.length} form(s) selected`}
        </p>
      </CardContent>
    </Card>
  );
}
